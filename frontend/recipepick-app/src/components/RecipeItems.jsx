import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BsStopwatch } from "react-icons/bs";
import "../components/RecipeItems.css";

export default function RecipeItems() {
  const recipes = useLoaderData();
  const [AllRecipes, setAllRecipes] = useState();
  console.log(AllRecipes);

  useEffect(() => {
    setAllRecipes(recipes);
  }, [recipes]);

  return (
    <>
      <div className="card-container">
        {AllRecipes?.map((item, index) => {
          return (
            <div key={index} className="card">
              <img
                src={`http://localhost:5000/images/${item.coverImage}`}
                width="120px"
                height="100px"
              ></img>
              <div className="card-body">
                <div className="title">{item.title}</div>
                <div className="icons">
                  <div className="timer">
                    <BsStopwatch />
                    {item.time}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
