import { Schema, model, models } from "mongoose";

const WritingSchema = new Schema(
  {
    title: String,
    description: String,
    keywords: [String],
    field: String,
    type: String,
    priority: Number,
  },
  { collection: "writings" }
);

export const Writing = models.Writing || model("Writing", WritingSchema);
