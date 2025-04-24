import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddFoodRecipe.css";
import axios from "axios";

export default function AddFoodRecipe() {
  // useState to store the recipe data
  const [recipeData, setRecipeData] = useState([]);
  const navigate = useNavigate();

  //handle changes to inputs
  const onHandleChange = (e) => {
    let val =
      e.target.name === "ingredients"
        ? e.target.value.split(",")
        : e.target.name === "file"
        ? e.target.files[0]
        : e.target.value;

    setRecipeData((pre) => ({
      ...pre,
      [e.target.name]: val,
    }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    console.log(recipeData);
    await axios
      .post("http://localhost:5000/recipe", recipeData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => navigate("/"));

    console.log("recipe added successfully");
  };

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={onHandleSubmit}>
          <div className="form-control">
            <label>Title</label>
            <input
              type="text"
              className="input"
              name="title"
              onChange={onHandleChange}
            ></input>
          </div>
          <div className="form-control">
            <label>Time</label>
            <input
              type="text"
              className="input"
              name="time"
              onChange={onHandleChange}
            ></input>
          </div>
          <div className="form-control">
            <label>Ingredients</label>
            <input
              type="text"
              className="input-textarea"
              name="ingredients"
              onChange={onHandleChange}
            ></input>
          </div>
          <div className="form-control">
            <label>Instructions</label>
            <input
              type="text"
              className="input-textarea"
              name="instructions"
              onChange={onHandleChange}
            ></input>
          </div>
          <div className="form-control">
            <label>Recipe Image</label>
            <input
              type="file"
              className="input"
              name="file"
              onChange={onHandleChange}
            ></input>
          </div>
          <button type="submit" onSubmit={onHandleSubmit}>
            {" "}
            Add Recipe
          </button>
        </form>
      </div>
    </>
  );
}
