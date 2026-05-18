import { NextResponse } from "next/server";
import { canSendSmtpMail, sendContactMail } from "../_lib/smtpMailer";

export async function POST(request: Request) {
  const payload = (await request.json()) as {
    fullName?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  if (!payload.fullName || !payload.email || !payload.subject || !payload.message) {
    return NextResponse.json(
      { message: "Tous les champs sont obligatoires." },
      { status: 400 }
    );
  }

  if (!canSendSmtpMail()) {
    return NextResponse.json(
      { message: "SMTP is not configured." },
      { status: 503 }
    );
  }

  await sendContactMail({
    fromEmail: payload.email,
    fromName: payload.fullName,
    subject: payload.subject,
    message: payload.message,
  });

  return NextResponse.json({ sent: true });
}
