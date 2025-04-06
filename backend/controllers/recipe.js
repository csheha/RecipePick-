import Recipes from "../models/recipe.js";

const addRecipe = async (req, res) => {
  const { title, ingredients, instructions, time } = req.body;

  if (!title || !ingredients || !instructions) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newRecipe = await Recipes.create({
    title,
    ingredients,
    instructions,
    time,
  });
  return res
    .status(200)
    .json({ message: "Recipe added successfully", newRecipe });
};

const getRecipes = async (req, res) => {
  try {
    let recipes = await Recipes.find();
    // Return the recipes as a JSON response
    return res.json(recipes);
  } catch (err) {
    // Handle errors
    return res
      .status(500)
      .json({ message: "Error fetching recipes", error: err.message });
  }
};

const getRecipe = async (req, res) => {
  const recipe = await Recipes.findById(req.params.id);
  try {
    if (recipe) {
      // Extract relevant fields from the recipe object
      const { title, ingredients, instructions, time } = recipe;
      await Recipes.findById(req.params.id);
      res.json({ title, ingredients, instructions, time });
    }
  } catch (err) {
    // If no recipe is found, return a 404 status
    return res.status(404).json({ message: "error" });
  }
};

const editRecipe = async (req, res) => {
  const { id } = req.params;
  const { title, ingredients, instructions, time } = req.body;

  if (!title || !ingredients || !instructions) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const recipe = await Recipes.findByIdAndUpdate(
      id,
      { title, ingredients, instructions, time },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Recipe updated successfully", recipe });
  } catch (err) {
    // If no recipe is found, return a 404 status
    return res.status(404).json({ message: "error" });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipes.findByIdAndDelete(req.params.id);

    //if there os no recipe
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    return res.json({ message: "Recipe deleted successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error deleting recipe", error: err.message });
  }
};

export { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe };
