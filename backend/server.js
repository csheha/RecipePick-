import express from "express";
import dotenv from "dotenv";
import recipeRoutes from "./routes/recipe.js";
import userRoutes from "./routes/user.js";
import connectDB from "./config/connectionDB.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
app.use(express.json()); // Middleware to parse JSON requests
connectDB(); // Connect to the database

app.use("/recipe", recipeRoutes); // Use the recipe routes
app.use("/user", userRoutes); // Use the user routes

app.listen(PORT, (err) => {
  console.log(`App is listening on ${PORT}`);
});
