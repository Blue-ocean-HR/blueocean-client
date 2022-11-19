import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0ProviderWithHistory } from "./auth/auth0-provider-with-history.jsx";
import './style.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <React.StrictMode>
  <Router>
    {/* <Auth0ProviderWithHistory>*/}

      <App />
  </Router>,
  </React.StrictMode>

);