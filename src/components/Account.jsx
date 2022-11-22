import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom'
import {LogoutButton} from './logout-button.jsx'

const Account = () => {
  const {user} = useAuth0()
  return (
    <div>
      <div>Profile Picture</div>
      <div>Email: {user.email}</div>
      <LogoutButton />
    </div>
  )
}

export default Account;