import { NextResponse } from "next/server";
import {
  clearAdminSession,
  isAdminAuthenticated,
  setAdminSession,
  validateAdminCredentials,
} from "../../_lib/adminAuth";

export async function GET() {
  return NextResponse.json({ authenticated: await isAdminAuthenticated() });
}

export async function POST(request: Request) {
  const credentials = (await request.json()) as {
    email?: string;
    password?: string;
  };

  if (
    !validateAdminCredentials(
      credentials.email ?? "",
      credentials.password ?? ""
    )
  ) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ authenticated: true });
  setAdminSession(response);
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ authenticated: false });
  clearAdminSession(response);
  return response;
}
