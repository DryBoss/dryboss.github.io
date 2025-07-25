import { connectToDatabase } from "@/lib/db-connect";
import { Project } from "@/lib/models/projects";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  const projectDetail = await Project.find({}).lean(); // Return all projects
  return NextResponse.json(projectDetail); // ✅ Sends array
}
