import React, {useState, useEffect, Fragment} from 'react';
import FavoriteButton from './components/FavoriteButton.jsx'
import food from './recipe-card-assets/food.jpeg'
import {Link} from 'react-router-dom'

export default function Recipe({recipe, toggleFavorite}) {
  const [accordion, setAccordion] = useState("hidden")
  const handleAccordion = () => {
    accordion === "hidden" ? setAccordion('') : setAccordion('hidden')
  }
  return (
     <div className=" card dark:bg-gray-800">
      <div className="flex justify-between m-3">
        {/* <div className="m-2 flex"> */}
        <Link to={`/${recipe.recipe_id}`} state={{ recipe: recipe }}>
          <h5 className="text-xl dark:text-white">{recipe.title}</h5>
          </Link>
          <div className="">
            <FavoriteButton toggleFavorite={toggleFavorite} recipe={recipe} />
          </div>
        {/* </div> */}
      </div>
      <div className="flex items-center justify-center p-2">
      <Link to={`/${recipe.recipe_id}`} state={{ recipe: recipe }}>
      <img className="card-image" src={food} alt="Logo" />
      </Link>
      </div>
      <div className="m-3" onClick={handleAccordion}>
        <div className="flex justify-between">
        <button>Ingredients</button>
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
        <ul className={accordion}>
        {recipe.ingredients.map(ingredient => {
          return (<li className="dark:text-white">{ingredient}</li>)
        })}
        </ul>
      </div>
      {/* <div className="card-text">
        <strong>Steps:</strong>
        <ol>
        {recipe.steps.map(step => {
          return (<li>{step}</li>)
        })}
        </ol>
        <strong>Ingredients:</strong>

      </div> */}

    </div>
          // </div>
  );
}