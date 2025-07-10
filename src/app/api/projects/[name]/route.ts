import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db-connect";
import { ProjectDetails } from "@/lib/models/project-details";

export async function GET(
  req: NextRequest,
  context: { params: { name: string } } // ✅ valid context shape
) {
  try {
    await connectToDatabase();

    const name = decodeURIComponent(context.params.name);

    const project = await ProjectDetails.findOne({ name }).lean();

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
