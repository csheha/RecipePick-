import React from "react";

export default function RecipeItems() {
  return (
    <div key={index} className="card">
      <img
        src={`http://localhost:5000/images/${item.coverImage}`}
        width="120px"
        height="100px"
      ></img>
    </div>
  );
}
