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
     <div className=" card dark:bg-gray-800 dark:text-white">
      <div className="flex justify-between m-3">
        {/* <div className="m-2 flex"> */}
        <Link to={`/${recipe.recipe_id}`} state={{ recipe: recipe }}>
          <h5 className="text-xl dark:text-white">{recipe.title}</h5>
          </Link>
          <div>
            <FavoriteButton toggleFavorite={toggleFavorite} recipe={recipe} />
          </div>
        {/* </div> */}
      </div>
      <div className="flex items-center justify-center p-2">
      <Link to={`/${recipe.recipe_id}`} state={{ recipe: recipe }}>
      <img className="card-image" src={recipe.url} alt="Logo" />
      </Link>
      </div>
      <div className="m-3" onClick={handleAccordion}>
        <div className="flex justify-between">
        <button>Ingredients</button>
        <div className="flex">
        <div className="flex">{recipe.ingredientsInPantry ? recipe.ingredientsInPantry.length : 0}
            <svg className="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
        </div>
        <div className="flex">{recipe.ingredientsNotInPantry ? recipe.ingredientsNotInPantry.length : 0}
                <svg className="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
        </div>
        </div>
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
 </div>
  );
}