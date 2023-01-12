import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom'
import {LogoutButton} from './logout-button.jsx'

const Account = () => {
  const {user} = useAuth0()
  const profilePic = user.picture || "https://upload.wikimedia.org/wikipedia/commons/b/bd/Kawaii_earth_clipart.svg";
  return (
    <div className="flex justify-center">
    <div className="bg-secondary border rounded-lg overflow-hidden mt-3  dark:bg-black  dark:border-white dark:text-white text-black">
      <div className="rounded-full w-60 aspect-square overflow-hidden m-2" >
        <img className="w-60 aspect-auto border-light dark:border-white" src={profilePic}></img>
      </div>
      <div className="m-2">Name: {user.given_name[0].toUpperCase()+user.given_name.slice(1)+' '+user.family_name[0].toUpperCase()+user.family_name.slice(1)}</div>
      <div className="m-2">Email: {user.email}</div>
      <LogoutButton />
    </div>
    </div>
  )
}

export default Account;