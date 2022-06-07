import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase.js";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        
        //deliver the data for the data layer
        //the user exist in the data layer now
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });

      })
      .catch((error) => alert(error.message));
  };

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
