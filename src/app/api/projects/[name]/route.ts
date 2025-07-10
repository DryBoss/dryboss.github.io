import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db-connect";
import { ProjectDetails } from "@/lib/models/project-details";

// define type for context correctly
type Context = {
  params: {
    name: string;
  };
};

export async function GET(req: NextRequest, context: Context) {
  await connectToDatabase();

  const name = decodeURIComponent(context.params.name);

  const project = await ProjectDetails.findOne({ name }).lean();

  if (!project) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
