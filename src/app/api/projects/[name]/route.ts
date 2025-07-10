import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db-connect";
import { ProjectDetails } from "@/lib/models/project-details";

export async function GET(
  req: NextRequest,
  { params }: { params: { name: string } }
) {
  await connectToDatabase();

  const name = decodeURIComponent(params.name);

  const project = await ProjectDetails.findOne({ name }).lean();

  if (!project) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
