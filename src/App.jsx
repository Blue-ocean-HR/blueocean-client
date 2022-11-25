import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {AnimatePresence, motion } from 'framer-motion'
import Pantry from './components/pantry/Pantry.jsx'
import Account from './components/Account.jsx'
import RecipeFull from './components/RecipeFull.jsx'
import AddPantryItem from './components/addPantryItem/addPantryItem.jsx';
import About from './components/About.jsx';
import Nav from './Nav.jsx';

import {Routes, Route, Link, useLocation} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import Recipes from './Recipes.jsx'
const App = () => {

  const location = useLocation();
  const { isLoading, isAuthenticated, user, context } = useAuth0();
  const [darkMode, setDarkMode] = useState('')
  const [recipes, setRecipes] = useState(null);

  const getUserFavorites = () => {
    axios.get('/favorite', {params: {email: user.email}}).then(favorites => {
      console.log(favorites)
      setRecipes(favorites.data)
    }).catch(error => console.log(error))
  }

  const toggleFavorite = (fav, recipeId) => {
    if (!fav) {
      axios.delete('/favorite', {params: {email: user.email, recipe_id: recipeId}})
    } else {
      axios.post('/favorite', {email: user.email, recipe_id: recipeId})
    }
  }

  const darkToggle = () => {
    if (darkMode === 'dark') {
      setDarkMode('')
      document.getElementById("html").classList.remove('dark');
    } else {
      setDarkMode('dark')
      document.getElementById("html").classList.add('dark');
    }
  }
  // Add user to DB if they just signed up
  useEffect(() => {
    if (isAuthenticated) {
      axios.post('/users', {email: user.email}).then(data => console.log(data)).catch(error => console.log(error))
    }
    var dummyBody = {ingredients: ["chicken"]}
    axios.get('/recipes', {params: dummyBody}).then(val => {
      console.log(val.data)
      setRecipes(val.data)}
      ).catch(error => console.log(error))
  }, [user])
  return (
    <div >
    <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
      <Nav darkToggle={darkToggle}/>
      <AnimatePresence>
        <Routes location={location}>
          {isAuthenticated ? <Route path='/account' element={<Account />} /> : null}
          <Route path="/:recipeId" element={<RecipeFull toggleFavorite={toggleFavorite} />} />
          <Route path="/addPantryItem" element={<AddPantryItem />} />
          <Route path="/" element={recipes && <Recipes recipes={recipes} getUserFavorites={getUserFavorites} toggleFavorite={toggleFavorite}/>} />
          <Route path="/pantry" element={<Pantry />} />
          <Route path="/about" element={<About />}/>
        </Routes>
      </AnimatePresence>
    </motion.div>
    </div>
  )}


export default App;