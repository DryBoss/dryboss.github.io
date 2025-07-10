import { connectToDatabase } from "@/lib/db-connect";
import { ProjectDetails } from "@/lib/models/project-details";
import { NextResponse } from "next/server";

interface Params {
  params: {
    name: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  await connectToDatabase();

  const projectDetail = await ProjectDetails.findOne({
    name: decodeURIComponent(params.name),
  }).lean();

  if (!projectDetail) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(projectDetail);
}
