import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import Home from "./pages/Home";
import axios from "axios";

const getAllRecipes = async () => {
  try {
    let AllRecipes = [];
    await axios
      .get("http://localhost:5000/recipe")
      .then((res) => (AllRecipes = res.data));
    return AllRecipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [
      { path: "/", element: <Home />, loader: getAllRecipes },
      { path: "/myRecipe", element: <Home /> },
      { path: "/favRecipe", element: <Home /> },
    ],
  },
  ,
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
