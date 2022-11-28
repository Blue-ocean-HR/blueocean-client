import React, {useState, useEffect} from 'react';
import Recipe from './Recipe.jsx'
import {motion} from 'framer-motion'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";

const Recipes = ({recipes, setRecipes, ingredients, getUserFavorites, toggleFavorite}) => {
  const [query, setQuery] = useState('');
  const [pantry, setPantry] = useState([]);
  const [pantryItem, setPantryItem] = useState("");
  const {user, isAuthenticated} = useAuth0();

  var handleInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }
  var handleSearch = (e)=> {
    e.preventDefault();
    //console.log(query)
    if (isAuthenticated) {
      var obj = {ingredients: [query], email: user.email};
      axios.get('/recipes', {params: obj})
      .then(result => {
        console.log('RESULT DATA', result.data)
        setRecipes(result.data)
      })
    } else
    var obj = {ingredients: [query]};
    axios.get('/recipes', {params: obj})
    .then(result => {
      console.log('RESULT DATA', result.data)
      setRecipes(result.data)
    })

  }
  var handleFavorite = (e)=> {
    e.preventDefault();
    getUserFavorites()
  }

  var handleIngredientSelect = (e)=> {
    e.preventDefault();
    setPantryItem(e.target.value);
  }

  var handleIngredientAdd = (e) => {
    e.preventDefault();
    //console.log(pantry, pantryItem)
    setPantry(old => {
      if(old.indexOf(pantryItem) !== -1) {
        return old;
      } else{
        return [...old, pantryItem]
      }
    })
  }
  //calls after an ingredient is added
  useEffect(()=> {
    if (isAuthenticated) {
      var pan = {ingredients: pantry, email: user.email};
      axios.get('/recipes', {params: pan})
      .then(result => {
        if(result.data === "") {
          setRecipes([])
        } else {
          setRecipes(result.data)
        }
      })
    } else {
      var pan = {ingredients: pantry};
      axios.get('/recipes', {params: pan})
      .then(result => {
        if(result.data === "") {
          setRecipes([])
        } else {
          setRecipes(result.data)
        }
      })
    }

  }, [pantry])

  var handleRemove = (item) => {
    var newArr = pantry.filter(pItem=> pItem !== item)
    setPantry(newArr)
  }


  var dummyData = {
    title: "HI",
    date: 'today',
    description: "beef wotj bprpcpas",
    author: ["hi"],
    liked: true,
    likeCount: 2
  }

  return (
    <motion.div className="recipes-page"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <div className="recipes-inner">
      <h1 className="text-accent text-4xl font-bold dark:text-white">RECIPES</h1>

      {/*FAVORITE BUTTON*/}


      {/*SEARCH BAR*/}
      <div className="flex flex-col">
      <form class="flex items-center justify-center m-3">
    {/* <label for="voice-search" class="sr-only">Search</label> */}
    <div class="relative w-full md:w-3/4">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input onChange={handleInput} type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Recipes..." required />
    </div>
    <button onClick={handleSearch} type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-black bg-secondary rounded-lg border border-secondary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search</button>
</form>
      <div>
        <button className="m-3 bg-button-accent rounded p-2" onClick={handleFavorite}>My Favorites</button>
      </div>
      </div>
      {/* CHOOSE INGREDIENTS DROP DOWN */}
      <div className="flex justify-center items-center mb-8 mt-3">
        <select className="h-9" onChange={handleIngredientSelect} name="ingredient" id="ingredient-dropdown">
          {/* render pantry items accordingly */}
          <option value="" defaultValue>Choose Ingredients...</option>
          {ingredients && ingredients.map(ingredient => {
            return (<option value={ingredient.pantry_ingredient}>{ingredient.pantry_ingredient}</option>)
          })}
        </select>
        <div className="flex justify-center items-center mb-3 ml-2">
        <button onClick={handleIngredientAdd} className="mt-3">
        <svg className="text-gray-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="#CEE5D0" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>


        </button>
        </div>
      </div>
      <div className="filters">
        {pantry && pantry.map((item, i)=> {
          return (<div key={i}>{item} <button onClick={()=> {
            handleRemove(item)
          }}>X</button><br/></div>)
        })}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
      {recipes.length > 0 ? recipes.map(recipe => {
        return (<Recipe recipe={recipe} toggleFavorite={toggleFavorite}/>)
      }): (<div>NO RESULTS FOUND</div>)}
      </div>
      </div>



    </motion.div>
  )
}

export default Recipes;

{/* <FontAwesomeIcon icon={faSquarePlus} /> */}
// className="ml-2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"