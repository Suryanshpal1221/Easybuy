import React from "react";
import "./AuthBar.css";
import { useNavigate } from "react-router-dom";

function AuthBar() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <header>
        <div onClick={handleSignIn}>Sign in/Guest</div>
        <div onClick={handleSignUp}>Create Account</div>
      </header>
    </>
  );
}

export default AuthBar;
