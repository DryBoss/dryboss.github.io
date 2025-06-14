import { connectToDatabase } from "@/lib/db-connect";
import { Project } from "@/lib/models/projects";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  const projects = await Project.find({}).lean();
  return NextResponse.json(projects);
}
