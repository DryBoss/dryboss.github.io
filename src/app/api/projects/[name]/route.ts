import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db-connect";
import { ProjectDetails } from "@/lib/models/project-details";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  await connectToDatabase();

  const resolvedParams = await params; // await the Promise first
  const name = decodeURIComponent(resolvedParams.name); // then decode the string

  const project = await ProjectDetails.findOne({ name }).lean();

  if (!project) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
