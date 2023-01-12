import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {AnimatePresence, motion } from 'framer-motion'
import Pantry, {PantryContext} from './components/pantry/Pantry.jsx'
import Account from './components/Account.jsx'
import RecipeFull from './components/RecipeFull.jsx'
import AddPantryItem from './components/addPantryItem/AddPantryItem.jsx';
import About from './components/About.jsx';
import Nav from './Nav.jsx';

import {Routes, Route, Link, useLocation} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import Recipes from './Recipes.jsx'
const App = () => {

  const location = useLocation();
  const { isLoading, isAuthenticated, user, context } = useAuth0();
  const [darkMode, setDarkMode] = useState('')
  const [recipes, setRecipes] = useState([]);
  // Default pantry - only exists if the server is down
  const [ingredients, setIngredients] = useState([
    { id: 400, pantry_ingredient: 'pear', expiryDate: '2022-12-05', category: 'Fruit'},
    { id: 401, pantry_ingredient: 'apple', expiryDate: '2022-12-12', category: 'Fruit'},
    { id: 402, pantry_ingredient: 'banana', expiryDate: '2022-12-21', category: 'Fruit'},
    { id: 403, pantry_ingredient: 'orange', expiryDate: '2022-11-25', category: 'Fruit'},
    { id: 404, pantry_ingredient: 'peach', expiryDate: '2022-11-27', category: 'Fruit'},
    { id: 405, pantry_ingredient: 'mango', expiryDate: '2022-11-29', category: 'Fruit'},
    { id: 666, pantry_ingredient: 'Eye of Newt', expiryDate: '2067-11-21', category: 'Dairy'}
  ]);

  const getUserFavorites = () => {
    if (isAuthenticated) {
    axios.get('/favorite', {params: {email: user.email}}).then(favorites => {
      if (favorites.data !== '') {
        setRecipes(favorites.data)
      } else {
        setRecipes("no results")
      }


    }).catch(error => console.log(error))
  }
  }

  const toggleFavorite = (fav, recipeId) => {
    if (isAuthenticated) {
      if (!fav) {
        axios.delete('/favorite', {params: {email: user.email, recipe_id: recipeId}})
      } else {
        axios.post('/favorite', {email: user.email, recipe_id: recipeId})
      }
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

  const recipeHomePageRender = () => {
    if (isAuthenticated) {
      console.log('user fetch')
      axios.post('/users', {email: user.email}).then(data => console.log(data)).catch(error => console.log(error))
      var dummyBody = { ingredients: [""], email: user.email}
      axios.get('/recipes', {params: dummyBody}).then(val => {

        setRecipes(val.data)}
        ).catch(error => console.log(error))
        axios.get(`/pantry`, {
          params: {
            email: user.email
          }
        })
        .then(result => {
          setIngredients(result.data.length > 0 ? result.data : []);
        }).catch(error => console.log(error))
    } else {
      var dummyBody = { ingredients: [""]}
      axios.get('/recipes', {params: dummyBody}).then(val => {
        setRecipes(val.data)}
        ).catch(error => console.log(error))
    }
  }
  // Add user to DB if they just signed up
  useEffect(() => {
    recipeHomePageRender()
  }, [user])
  return (
    <div >
    <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
      <Nav darkToggle={darkToggle} recipeHomePageRender={recipeHomePageRender}/>
      <AnimatePresence>
        <Routes location={location}>
          {isAuthenticated ? <Route path='/account' element={<Account />} /> : null}
          <Route path="/full/:recipeId" element={<RecipeFull toggleFavorite={toggleFavorite} />} />
          <Route path="/addPantryItem" element={<AddPantryItem />} />
          <Route path="/" element={recipes && ingredients && <Recipes recipeHomePageRender={recipeHomePageRender} setRecipes={setRecipes} recipes={recipes} ingredients={ingredients} getUserFavorites={getUserFavorites} toggleFavorite={toggleFavorite}/>} />
          {isAuthenticated && <Route path="/pantryItems" element={<Pantry ingredients={ingredients} setIngredients={setIngredients} />} />}
          <Route path="/about" element={<About />}/>
        </Routes>
      </AnimatePresence>
    </motion.div>
    </div>
  )}


export default App;