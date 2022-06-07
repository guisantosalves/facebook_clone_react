import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import {auth, provider} from "./firebase.js"
import {signInWithPopup} from "firebase/auth"

function Login() {

    const signIn = () => {
        signInWithPopup(auth, provider).then(result=>{
            console.log(result.user.displayName+" e seu email é: "+result.user.email);
        }).catch((error)=>alert(error.message))
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
