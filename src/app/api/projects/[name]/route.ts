import { connectToDatabase } from "@/lib/db-connect";
import { ProjectDetails } from "@/lib/models/project-details";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { name: string } }
) {
  await connectToDatabase();

  const name = decodeURIComponent(context.params.name);

  const projectDetail = await ProjectDetails.findOne({
    name: name,
  }).lean();

  if (!projectDetail) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(projectDetail);
}
