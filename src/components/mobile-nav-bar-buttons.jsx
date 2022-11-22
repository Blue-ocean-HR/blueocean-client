import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "./login-button.jsx";
import { LogoutButton } from "./logout-button.jsx";
import { SignupButton } from "./signup-button.jsx";

export const NavBarButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    // style for mobile
    <div>
      {!isAuthenticated && (
        <>
          {/* <SignupButton /> */}
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};