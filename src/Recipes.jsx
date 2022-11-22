import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import Recipe from './Recipe.jsx'
import {motion} from 'framer-motion'

const Recipes = () => {
  const [query, setQuery] = useState('');
  const [pantry, setPantry] = useState([]);
  const [pantryItem, setPantryItem] = useState("");


  var handleInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }
  var handleSearch = (e)=> {
    e.preventDefault();
    console.log(query)
  }
  var handleFavorite = (e)=> {
    e.preventDefault();
  }

  var handleIngredientSelect = (e)=> {
    e.preventDefault();
    setPantryItem(e.target.value);
  }

  var handleIngredientAdd = (e) => {
    e.preventDefault();
    console.log(pantry, pantryItem)
    setPantry(old => {
      if(old.indexOf(pantryItem) !== -1) {
        return old;
      } else{
        return [...old, pantryItem]
      }
    })

  }
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
      <h1 className="text-primary text-4xl font-bold">RECIPES</h1>

      {/*FAVORITE BUTTON*/}
      <div>
        <button className="recipes-favorite-button" onClick={handleFavorite}>FAVORITE</button>
      </div>

      {/*SEARCH BAR*/}
      <div className="recipes-search-bar">
        <div className="search">
          <input className="searchTerm" type="text" value={query} placeholder="Search.." onChange={handleInput}></input>
          <button className="searchButton" type="submit" onSubmit={handleSearch}>Search</button>
        </div>
      </div>

      {/* CHOOSE INGREDIENTS DROP DOWN */}
      <div className="choose-ingredient">
        <select onChange={handleIngredientSelect} name="ingredient" id="ingredient-dropdown">
          {/* render pantry items accordingly */}
          <option value="" defaultValue>Choose Ingredients...</option>
          <option value="pantry item 1">PANTRY 1</option>
          <option value="pantry item 2">PANTRY 2</option>
        </select>
        <button onClick={handleIngredientAdd} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"><FontAwesomeIcon icon={faSquarePlus} /></button>
      </div>
      <div className="filters">
        {pantry && pantry.map((item, i)=> {
          console.log(item)
          return (<div key={i}>{item} <button onClick={()=> {
            handleRemove(item)
          }}>X</button><br/></div>)
        })}
      </div>
      {/*map through the recipes*/}
      <Recipe data={dummyData}/>
      </div>
      {/* FILTER DROPDOWN */}


    </motion.div>
  )
}

export default Recipes;