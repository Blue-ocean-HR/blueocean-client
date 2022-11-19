import React from 'react';
import DummyHome from './DummyHome.jsx';
import DummyPantry from './DummyPantry.jsx'
import Nav from './Nav.jsx'
import {Routes, Route, Link} from 'react-router-dom'
const App = () => {
  return (
    <div className="bg-orange-100 h-screen">
    <div >
      <Nav />
      <Routes>
        <Route path="/" element={<DummyHome />} />
        <Route path="/pantry" element={<DummyPantry />} />
        </Routes>


    </div>
    </div>
  )
}

export default App;