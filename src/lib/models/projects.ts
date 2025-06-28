import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    name: String,
    description: String,
    technologies: [String],
  },
  { collection: "projects" }
);

export const Project = models.Project || model("Project", ProjectSchema);
