import express from "express";
import dotenv from "dotenv";
import { getRecipes } from "../controllers/recipe.js";

const router = express.Router();
dotenv.config();

router.get("/", getRecipes); //Get all recipes

export default router;
