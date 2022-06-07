import React from "react";
import "./Login.css";
import { Button } from "@mui/material";

function Login() {

    const signIn = () => {
        //sign in
    }

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/640px-2021_Facebook_icon.svg.png"
          alt="Fcebook Logo"
        />
        <img             
            src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" 
            alt="facebook name"
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
}

export default Login;
