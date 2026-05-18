import { NextResponse } from "next/server";
import { isAdminCollectionName } from "../../../../../data/adminTypes";
import {
  isAdminAuthenticated,
  unauthorizedResponse,
} from "../../../../_lib/adminAuth";
import { deleteAdminItem } from "../../../../_lib/adminStore";

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ collection: string; index: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return unauthorizedResponse();
  }

  const { collection, index } = await context.params;

  if (!isAdminCollectionName(collection)) {
    return NextResponse.json(
      { message: "Unknown collection" },
      { status: 404 }
    );
  }

  const itemIndex = Number(index);

  if (!Number.isInteger(itemIndex) || itemIndex < 0) {
    return NextResponse.json({ message: "Invalid index" }, { status: 400 });
  }

  return NextResponse.json(await deleteAdminItem(collection, itemIndex));
}
