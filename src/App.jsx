import React from 'react';
import DummyHome from './DummyHome.jsx';
import DummyPantry from './DummyPantry.jsx'
import Nav from './Nav.jsx'
import {Routes, Route, Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import Recipes from './Recipes.jsx'
const App = () => {
  const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return (
  //     <div className="page-layout">
  //       <PageLoader />
  //     </div>
  //   );
  // }
  return (
    <div className="bg-orange-100 h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<DummyHome />} />
        <Route path="/pantry" element={<DummyPantry />} />
        <Route path="/recipes" element={<Recipes/>}/>
      </Routes>
    </div>
  )}


export default App;