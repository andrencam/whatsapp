import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {};

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt=""
        />

        <div className="login__text">
          <h1>Sign In to WhatsApp</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
