import { connectToDatabase } from "@/lib/db-connect";
import { Feature } from "@/lib/models/features";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  const featureDetail = await Feature.find({}).lean(); // Return all features
  return NextResponse.json(featureDetail); // ✅ Sends array
}
