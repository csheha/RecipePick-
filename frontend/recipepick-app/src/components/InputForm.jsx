import React from "react";
import "../styles/InputForm.css";
import { useState } from "react";

export default function InputForm() {
  //hooks to store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //signup hook
  const [isSignup, setIsSignup] = useState(false);

  // Function to handle form submission
  const handleOnSubmit = () => {
    e.preventDefault();
  };

  return (
    <>
      <div className="login-box">
        <p>{isSignup ? "Sign Up" : "Login"}</p>
        <form>
          <div className="user-box">
            <input
              type="email"
              className="input"
              onChange={() => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              className="input"
              onChange={() => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <a href="#" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {isSignup ? "Sign Up" : "Login"}
          </a>
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
