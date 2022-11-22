import React from 'react';
import DummyHome from './DummyHome.jsx';
import Pantry from './components/pantry/Pantry.jsx';
import AddPantryItem from './components/addPantryItem/AddPantryItem.jsx'
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
        <Route path="/" element={<DummyHome />} />
        <Route path="/pantry" element={<Pantry />} />
        <Route path="/addPantryItem" element={<AddPantryItem />} />
        </Routes>


    </div>
    </div>
  )
}

export default App;