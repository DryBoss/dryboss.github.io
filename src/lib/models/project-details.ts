import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    name: String,
    description: String,
    technologies: [String],
    links: [String],
    images: [String],
  },
  { collection: "project-details" }
);

export const ProjectDetails =
  models.ProjectDetails || model("ProjectDetails", ProjectSchema);
