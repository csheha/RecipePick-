import express from "express";
import dotenv from "dotenv";
import {
  getRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
} from "../controllers/recipe.js";

const router = express.Router();
dotenv.config();

router.get("/", getRecipes); //Get all recipes
router.get("/:id", getRecipe); //Get recipe by ID
router.post("/", addRecipe); //Add recipe
router.put("/:id", editRecipe); //Edit recipe by ID
router.delete("/:id", deleteRecipe); //Delete recipe by ID

export default router;
