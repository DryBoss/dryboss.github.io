import mongoose, { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
  name: String,
  description: String,
  technologies: [String],
  link: String,
});

export const Project = models.Project || model("Project", ProjectSchema);
