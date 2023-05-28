import React from "react";
import "./Login.css";
import logo from "../assets/Spotify_Logo.jpg";
import { loginUrl } from "./Spotify";

function Login() {
  return (
    <div className="login">
      <img src={logo} alt="" />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
