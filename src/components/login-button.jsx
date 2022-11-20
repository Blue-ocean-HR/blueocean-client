import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
    /* {
      appState: {
        returnTo: "/profile",
      },
    }
    */
  };

  return (
    <button className="mr-2" onClick={handleLogin}>
      Log In
    </button>
  );
};