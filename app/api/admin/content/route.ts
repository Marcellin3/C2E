import { NextResponse } from "next/server";
import { normalizeContent } from "../../../data/adminTypes";
import {
  isAdminAuthenticated,
  unauthorizedResponse,
} from "../../_lib/adminAuth";
import { readAdminContent, writeAdminContent } from "../../_lib/adminStore";

export async function GET() {
  return NextResponse.json(await readAdminContent());
}

export async function PUT(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return unauthorizedResponse();
  }

  const content = normalizeContent(await request.json());
  return NextResponse.json(await writeAdminContent(content));
}

export async function DELETE() {
  if (!(await isAdminAuthenticated())) {
    return unauthorizedResponse();
  }

  return NextResponse.json(await writeAdminContent(normalizeContent(null)));
}
