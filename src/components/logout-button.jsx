import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <button className="m-2 rounded-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" onClick={handleLogout}>
      Log Out
    </button>
  );
};