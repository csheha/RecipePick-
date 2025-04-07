import React from "react";
import "./Home.css";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpeg";
import food4 from "../assets/food4.jpg";

export default function Home() {
  return (
    <>
      <>
        <div className="hero_container">
          <div className="hero-left">
            <div className="hero_heading">
              <h1>
                Discover Delicious <br></br>
                Recipes For <br></br>
                Every Occasion
              </h1>
            </div>
            <div className="hero_desc">
              <p>
                Welcome to your ultimate cooking companion! Explore a world of
                <br></br>
                flavors and elevate your culinary skills with our easy-to-follow
                recipes.{" "}
              </p>
            </div>
            <div className="hero_buttons_container">
              <div className="explore_button">
                <span>Explore</span>
              </div>
              <div className="loginsignup_button">
                <span>Login/Signup</span>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="coloumn1">
              <div className="coloumn1_img">
                <img src={food1} alt="foodimg1" className="foodimg" />
              </div>
              <div className="coloumn1_img">
                <img src={food2} alt="foodimg2" className="foodimg" />
              </div>
              <div className="coloumn1_img">
                <img src={food1} alt="foodimg1" className="foodimg" />
              </div>
              <div className="coloumn1_img">
                <img src={food2} alt="foodimg2" className="foodimg" />
              </div>
              <div className="coloumn1_img">
                <img src={food2} alt="foodimg2" className="foodimg" />
              </div>
            </div>
            <div className="coloumn2">
              <div className="coloumn2_img">
                <img src={food3} alt="foodimg1" className="foodimg" />
              </div>
              <div className="coloumn2_img">
                <img src={food4} alt="foodimg2" className="foodimg" />
              </div>
              <div className="coloumn2_img">
                <img src={food4} alt="foodimg2" className="foodimg" />
              </div>
              <div className="coloumn2_img">
                <img src={food4} alt="foodimg2" className="foodimg" />
              </div>
              <div className="coloumn2_img">
                <img src={food4} alt="foodimg2" className="foodimg" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <h2>next section</h2>
        <h2>next section</h2>
        <h2>next section</h2>
        <h2>next section</h2>
        <h2>next section</h2>
      </>
    </>
  );
}
