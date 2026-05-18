import { NextResponse } from "next/server";
import type { AdminApplication } from "../../data/adminTypes";
import { addAdminItem } from "../_lib/adminStore";

export async function POST(request: Request) {
  const application = (await request.json()) as AdminApplication;

  if (
    !application.opportunityTitle ||
    !application.fullName ||
    !application.email ||
    !application.phone ||
    !application.message ||
    !application.portfolio
  ) {
    return NextResponse.json(
      { message: "Missing required application fields" },
      { status: 400 }
    );
  }

  return NextResponse.json(
    await addAdminItem("applications", {
      ...application,
      submittedAt: application.submittedAt || new Date().toISOString(),
    })
  );
}
