import { Buffer } from "node:buffer";
import tls from "node:tls";

type SendMailInput = {
  fromEmail: string;
  fromName: string;
  subject: string;
  message: string;
};

const smtpConfig = {
  host: process.env.C2E_SMTP_HOST ?? "smtp.gmail.com",
  port: Number(process.env.C2E_SMTP_PORT ?? 465),
  user: process.env.C2E_SMTP_USER ?? "c2experteval@gmail.com",
  password: process.env.C2E_SMTP_PASSWORD,
  to: process.env.C2E_CONTACT_EMAIL ?? "c2experteval@gmail.com",
};

function encodeBase64(value: string) {
  return Buffer.from(value, "utf8").toString("base64");
}

function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function createMessage(input: SendMailInput) {
  const fromName = sanitizeHeader(input.fromName || "Nouveau contact C2E");
  const fromEmail = sanitizeHeader(input.fromEmail);
  const subject = sanitizeHeader(input.subject || "Nouveau message depuis C2E");
  const body = [
    `Nom: ${input.fromName}`,
    `Email: ${input.fromEmail}`,
    "",
    "Message:",
    input.message,
  ].join("\r\n");

  return [
    `From: "C2E Website" <${smtpConfig.user}>`,
    `To: <${smtpConfig.to}>`,
    `Reply-To: "${fromName}" <${fromEmail}>`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "",
    body,
  ].join("\r\n");
}

export function canSendSmtpMail() {
  return Boolean(smtpConfig.user && smtpConfig.password && smtpConfig.to);
}

export async function sendContactMail(input: SendMailInput) {
  if (!canSendSmtpMail() || !smtpConfig.password) {
    throw new Error("SMTP is not configured");
  }

  const commands = [
    `EHLO ${smtpConfig.host}`,
    "AUTH LOGIN",
    encodeBase64(smtpConfig.user),
    encodeBase64(smtpConfig.password),
    `MAIL FROM:<${smtpConfig.user}>`,
    `RCPT TO:<${smtpConfig.to}>`,
    "DATA",
    `${createMessage(input)}\r\n.`,
    "QUIT",
  ];

  await new Promise<void>((resolve, reject) => {
    const socket = tls.connect({
      host: smtpConfig.host,
      port: smtpConfig.port,
      servername: smtpConfig.host,
    });
    let commandIndex = 0;
    let finished = false;

    const fail = (error: Error) => {
      if (!finished) {
        finished = true;
        socket.destroy();
        reject(error);
      }
    };

    const sendNextCommand = () => {
      const command = commands[commandIndex];

      if (!command) {
        if (!finished) {
          finished = true;
          resolve();
        }
        return;
      }

      commandIndex += 1;
      socket.write(`${command}\r\n`);
    };

    socket.setTimeout(15000, () => fail(new Error("SMTP timeout")));
    socket.on("error", fail);
    socket.on("data", (data) => {
      const response = data.toString("utf8");
      const code = Number(response.slice(0, 3));

      if (code >= 400) {
        fail(new Error(`SMTP error ${code}`));
        return;
      }

      if (code === 220 || code === 235 || code === 250 || code === 334 || code === 354) {
        sendNextCommand();
      }
    });
    socket.on("end", () => {
      if (!finished) {
        finished = true;
        resolve();
      }
    });
  });
}
