import { Schema, model, models } from "mongoose";

const AchievementSchema = new Schema(
  {
    title: String,
    description: String,
    field: String,
    type: String,
    priority: Number,
  },
  { collection: "achievements" }
);

export const Achievement =
  models.Achievement || model("Achievement", AchievementSchema);
