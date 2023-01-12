import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      screen_hint: "signup",
    });
  };

  return (
    <button className=" rounded mr-3" onClick={handleSignUp}>
      Sign Up
    </button>
  );
};