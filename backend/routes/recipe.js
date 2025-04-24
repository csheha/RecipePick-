import express from "express";
import dotenv from "dotenv";
import {
  getRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
  upload,
} from "../controllers/recipe.js";
import verifyToken from "../Middleware/auth.js";

const router = express.Router();
dotenv.config();

router.get("/", getRecipes); //Get all recipes
router.get("/:id", getRecipe); //Get recipe by ID
router.post("/", upload.single("file"), verifyToken, addRecipe); //Add recipe
router.put("/:id", editRecipe); //Edit recipe by ID
router.delete("/:id", deleteRecipe); //Delete recipe by ID

export default router;
