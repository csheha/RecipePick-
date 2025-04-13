import e from "express";
import mongoose from "mongoose";

const recipeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    time: {
      type: String,
    },
    coverImage: {
      type: String,
    },
  },
  { timestamps: true }
); // Enables automatic `createdAt` and `updatedAt` fields

export default mongoose.model("Recipe", recipeSchema);
