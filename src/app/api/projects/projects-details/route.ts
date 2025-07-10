import { connectToDatabase } from "@/lib/db-connect";
import { Project } from "@/lib/models/projects";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  const projectDetail = await Project.findOne({
    name: "My Awesome Project",
  }).lean();

  return NextResponse.json(projectDetail);
}
