import React from "react";
import Logo from "../assets/logo.png";
import "./Navbar.css";
import Model from "../components/Model";
import InputForm from "./InputForm";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
export default function Navbar() {
  // model component open and close state
  const [isOpen, setIsOpen] = useState(false);
  let token = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(token ? true : false);
  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    setIsLogin(token ? true : false);
  }, [token]);

  //isOpen true or false -> check login function
  const checkLogin = () => {
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLogin(false);
    } else {
      setIsOpen(true);
    }
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
            <li className="nav_item">
              <NavLink to="/">Home Recipes</NavLink>
            </li>
            <li
              className="nav_item"
              onClick={() => !isLogin && setIsOpen(true)}
            >
              {" "}
              <NavLink to="/myRecipe">My Recipes</NavLink>
            </li>
            <li
              className="nav_item"
              onClick={() => !isLogin && setIsOpen(true)}
            >
              {" "}
              <NavLink to="/favRecipe">Favorites</NavLink>
            </li>
            <li
              className="nav_item"
              onClick={() => !isLogin && setIsOpen(true)}
            >
              {" "}
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </nav>
        <div className="login_signup_container">
          <button className="login_signup_box">
            <p className="text_loginsignup" onClick={checkLogin}>
              {isLogin ? "Logout" : "Login"}
              {user?.email ? `(${user?.email})` : ""}
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
