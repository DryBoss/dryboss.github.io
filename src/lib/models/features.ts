import { Schema, model, models } from "mongoose";

const FeatureSchema = new Schema(
  {
    title: String,
    description: String,
    link: String,
  },
  { collection: "featured" }
);

export const Feature = models.Feature || model("Feature", FeatureSchema);
