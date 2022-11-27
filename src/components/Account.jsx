import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom'
import {LogoutButton} from './logout-button.jsx'

const Account = () => {
  const {user} = useAuth0()
  const profilePic = "https://upload.wikimedia.org/wikipedia/commons/b/bd/Kawaii_earth_clipart.svg"
  return (
    <div className="flex justify-center">
    <div className="bg-white rounded-sm overflow-hidden border-l-2">
      <div className="bg-slate-400 " >
        <img src={profilePic}></img>
      </div>
      <div>Email: {user.email}</div>
      <LogoutButton />
    </div>
    </div>
  )
}

export default Account;