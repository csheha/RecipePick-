import React from "react";
import "../styles/InputForm.css";
import { useState } from "react";
import axios from "axios";

export default function InputForm({ setIsOpen }) {
  //hooks to store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //signup hook
  const [isSignup, setIsSignup] = useState(false);
  //to handle error
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let endpoint = isSignup ? "/signup" : "/login";
    await axios
      .post(`http://localhost:5000/user${endpoint}`, { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setIsOpen();
      })
      .catch((data) => setError(data.response?.data?.error));
  };

  return (
    <>
      <div className="login-box">
        <p>{isSignup ? "Sign Up" : "Login"}</p>
        <form onSubmit={handleOnSubmit}>
          <div className="user-box">
            <input
              type="email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit" className="a">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
          <br />
          {error != "" && <h6 className="error">{error}</h6>}
        </form>
        <p>
          {isSignup
            ? "Already have an account ?  "
            : "Don't have an account ?  "}
          <a href="#" className="a2" onClick={() => setIsSignup((pre) => !pre)}>
            {isSignup ? "Login" : "Signup !"}
          </a>
        </p>
      </div>
    </>
  );
}
