import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {AnimatePresence, motion } from 'framer-motion'
import DummyHome from './DummyHome.jsx';
import Pantry from './components/pantry/Pantry.jsx'
import RecipeFull from './components/RecipeFull.jsx'
import AddPantryItem from './components/addPantryItem/addPantryItem.jsx';
import Nav from './Nav.jsx'

import {Routes, Route, Link, useLocation} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import Recipes from './Recipes.jsx'
const App = () => {

  const location = useLocation();
  const { isLoading } = useAuth0();
  const [darkMode, setDarkMode] = useState('')
  // if (isLoading) {
  //   return (
  //     <div className="page-layout">
  //       <PageLoader />
  //     </div>
  //   );
  // }
  const darkToggle = () => {
    darkMode === 'dark' ? setDarkMode('') : setDarkMode('dark')
  }

  return (
    <div className={darkMode}>
    <div className="bg-light h-screen dark:bg-black">
    <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
      <Nav darkToggle={darkToggle}/>
      <AnimatePresence>
        <Routes location={location}>
          <Route path="/:recipeId" element={<RecipeFull />} />
          <Route path="/addPantryItem" element={<AddPantryItem />} />
          <Route path="/" element={<DummyHome />} />
          <Route path="/pantry" element={<Pantry />} />
        </Routes>
      </AnimatePresence>
    </motion.div>
    </div>
    </div>
  )}


export default App;