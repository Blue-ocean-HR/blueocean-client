import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faThin} from '@fortawesome/free-solid-svg-icons'

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

  return (
    <div>
      <h1 className="text-primary text-4xl font-bold">RECIPES</h1>
      <input type="text" value={query} placeholder="Search.." onChange={handleInput}></input>
      <button type="submit" onSubmit={handleSearch}>Search</button>

      {/* CHOOSE INGREDIENTS DROP DOWN */}
      <div className="choose-ingredient">
        <select name="ingredient" id="ingredient-dropdown">
          {/* render pantry items accordingly */}
          <option value="" disabled defaultValue>Choose Ingredients...</option>
          <option value="pantry item 1">PANTRY 1</option>
          <option value="pantry item 2">PANTRY 2</option>
        </select>
        <button><FontAwesomeIcon icon={faSquarePlus} /></button>
      </div>



    </div>
  )
}

export default Recipes;