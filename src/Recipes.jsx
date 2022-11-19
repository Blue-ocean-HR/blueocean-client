import React, {useState, useEffect} from 'react';

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
    </div>
  )
}

export default Recipes;