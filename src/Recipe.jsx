import React, {useState, useEffect, Fragment} from 'react';
import heartFill from './recipe-card-assets/heart-fill.png';
import heartOutline from './recipe-card-assets/heart-outline.png';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import food from './recipe-card-assets/food.jpeg'
import {Link} from 'react-router-dom'

export default function Recipe({recipe, toggleFavorite}) {
  const [open, setOpen] = useState(0);
  const [favorited, setFavorited] = useState(recipe.favorited)

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleFavorite = () => {
    console.log(favorited, recipe.favorited)
    if (favorited) {
      setFavorited(false)
      toggleFavorite(false, recipe.recipe_id)
    } else {
      setFavorited(true)
      toggleFavorite(true, recipe.recipe_id)
    }
  }
  return (
    //  <div className="grid grid-cols-3 gap-4 mr-10 mb-10 max-w-md min-w-md">
    //     <div className="flex-wrap col-span-2 row-span-2">{recipe.title}</div>
    //     <div>Star</div>
    //     <div className="col-span-3">Image</div>
    //     <div>01</div>
    //     <div>01</div>

     <div className=" card">
      <div className="card-header p-2 self-end">
        <div className="m-2 flex">
          <h5 className="text-xl">{recipe.title}</h5>
          <div className="justify-self-end self-end">
        <button onClick={handleFavorite}>
          {favorited ?  <svg className="ml-1 mr-1 self-end w-6 h-6 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="#ef5350" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg> : <svg className="ml-1 mr-1 self-end w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>}
          </button>
          </div>
          {/* <div className="card-date">{Date()}</div> */}
        </div>
      </div>
      <div className="p-2">
      <Link to={`/${recipe.recipe_id}`} state={{ recipe: recipe }}>
      <img className="card-image" src={food} alt="Logo" />
      </Link>
      </div>
      {/* <Fragment> */}
      <Accordion open={open === 1}>
        <AccordionHeader className="pl-2 pr-2 pb-3" onClick={() => handleOpen(1)}>
          Ingredients
        </AccordionHeader>
        <AccordionBody>
        <ul>
        {recipe.ingredients.map(ingredient => {
          return (<li>{ingredient}</li>)
        })}
        </ul>
        </AccordionBody>
      </Accordion>
      {/* </Fragment> */}
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