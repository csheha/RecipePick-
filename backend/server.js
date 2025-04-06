import express from "express";
import dotenv from "dotenv";
import recipeRoutes from "./routes/recipe.js";
import connectDB from "./config/connectionDB.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json()); // Middleware to parse JSON requests
connectDB(); // Connect to the database

app.use("/recipe", recipeRoutes); // Use the recipe routes

app.listen(PORT, (err) => {
  console.log(`App is listening on ${PORT}`);
});
