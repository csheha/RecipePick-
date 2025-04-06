import express from "express";
import dotenv from "dotenv";
import recipeRoutes from "./routes/recipe.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/recipe", recipeRoutes); // Use the recipe routes

app.listen(PORT, (err) => {
  console.log(`App is listening on ${PORT}`);
});
