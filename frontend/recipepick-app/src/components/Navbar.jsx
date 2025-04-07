import React from "react";
import Logo from "../assets/logo.png";
import "./Navbar.css";
import Model from "./model";
import InputForm from "./InputForm";
import { useState } from "react";

export default function Navbar() {
  // model component open and close state
  const [isOpen, setIsOpen] = useState(false);

  //isOpen true or false -> check login function
  const checkLogin = () => {
    setIsOpen(true);
  };

  return (
    <>
      <header className="nav_container">
        <div className="logo_container">
          <img className="logo_img" src={Logo} alt="logo" />
          <div className="text_box">
            <h2 className="text">RecipePick</h2>
          </div>
        </div>
        <nav className="nav_links_container">
          <ul className="nav_links">
            <li className="nav_item">Home Recipes</li>
            <li className="nav_item">My Recipes</li>
            <li className="nav_item">Favorites</li>
            <li className="nav_item">Blog</li>
          </ul>
        </nav>
        <div className="login_signup_container">
          <button className="login_signup_box">
            <p className="text_loginsignup" onClick={checkLogin}>
              Login / Signup
            </p>
          </button>
        </div>
      </header>
      {isOpen && (
        <Model onClose={() => setIsOpen(false)}>
          <InputForm setIsOpen={() => setIsOpen(false)}></InputForm>
        </Model>
      )}
    </>
  );
}
