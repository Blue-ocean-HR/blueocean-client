import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import Recipe from './Recipe.jsx'

const Recipes = () => {
  const [query, setQuery] = useState('');


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

  var dummyData = {
    title: "HI",
    date: 'today',
    description: "beef wotj bprpcpas",
    author: ["hi"],
    liked: true,
    likeCount: 2
  }

  return (
    <div className="recipes-page">
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
        <select name="ingredient" id="ingredient-dropdown">
          {/* render pantry items accordingly */}
          <option value="" defaultValue>Choose Ingredients...</option>
          <option value="pantry item 1">PANTRY 1</option>
          <option value="pantry item 2">PANTRY 2</option>
        </select>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"><FontAwesomeIcon icon={faSquarePlus} /></button>
      </div>

      {/* FILTER DROPDOWN */}
      <div className="filters">
        {/*applicable filters */}
        <input type="radio" id={"protein"} name="filter" value="protein"/>
        <input type="radio" id="vegetables" name="filter" value="vegetables"/>
        {/*labels for the applicable filters */}
        <ol className="filters">
        <li>
          <label htmlFor="protein">Protein</label>
        </li>
        <li>
          <label htmlFor="vegetables">Vegetables</label>
        </li>
        </ol>


      </div>

      {/*map through the recipes*/}
      <Recipe data={dummyData}/>





      </div>
    </div>
  )
}

export default Recipes;