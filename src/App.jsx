import React, {useEffect} from 'react';
import axios from 'axios'
import DummyHome from './DummyHome.jsx';
import Pantry from './components/pantry/Pantry.jsx'
import RecipeFull from './components/RecipeFull.jsx'
import Nav from './Nav.jsx'
import {Routes, Route, Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
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
    <div className="bg-slate-200 h-screen">
    <div >
      <Nav />
      <Routes>
        <Route path="/:recipeId" element={<RecipeFull />} />
        <Route path="/" element={<DummyHome />} />
        <Route path="/pantry" element={<Pantry />} />
        </Routes>


    </div>
    </div>
  )
}

export default App;