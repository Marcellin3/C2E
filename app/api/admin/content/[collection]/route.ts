import { NextResponse } from "next/server";
import { isAdminCollectionName } from "../../../../data/adminTypes";
import {
  isAdminAuthenticated,
  unauthorizedResponse,
} from "../../../_lib/adminAuth";
import { addAdminItem } from "../../../_lib/adminStore";

export async function POST(
  request: Request,
  context: { params: Promise<{ collection: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return unauthorizedResponse();
  }

  const { collection } = await context.params;

  if (!isAdminCollectionName(collection)) {
    return NextResponse.json(
      { message: "Unknown collection" },
      { status: 404 }
    );
  }

  return NextResponse.json(await addAdminItem(collection, await request.json()));
}
