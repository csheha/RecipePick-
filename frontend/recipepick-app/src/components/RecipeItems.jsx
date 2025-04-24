import React from "react";
import { BsStopwatchFill } from "react-icons/bs";

export default function RecipeItems() {
  return (
    <div key={index} className="card">
      <img
        src={`http://localhost:5000/images/${item.coverImage}`}
        width="120px"
        height="100px"
      ></img>
      <div className="title">{item.title}</div>
      <div className="icons">
        <div className="timer">
          <BsStopwatchFill />
          {item.time}{" "}
        </div>
      </div>
    </div>
  );
}
