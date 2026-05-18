import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const adminSessionCookie = "c2e-admin-session";
const adminSessionValue = "authenticated";

const adminCredentials = {
  email: process.env.C2E_ADMIN_EMAIL ?? "c2experteval@gmail.com",
  password: process.env.C2E_ADMIN_PASSWORD ?? "C2E@2026",
};

export function validateAdminCredentials(email: string, password: string) {
  return (
    email.trim().toLowerCase() === adminCredentials.email.toLowerCase() &&
    password === adminCredentials.password
  );
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(adminSessionCookie)?.value === adminSessionValue;
}

export function unauthorizedResponse() {
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
}

export function setAdminSession(response: NextResponse) {
  response.cookies.set(adminSessionCookie, adminSessionValue, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
}

export function clearAdminSession(response: NextResponse) {
  response.cookies.set(adminSessionCookie, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}
