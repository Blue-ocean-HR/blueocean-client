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

export default function Recipe({recipe}) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    //  <div className="grid grid-cols-3 gap-4 mr-10 mb-10 max-w-md min-w-md">
    //     <div className="flex-wrap col-span-2 row-span-2">{recipe.title}</div>
    //     <div>Star</div>
    //     <div className="col-span-3">Image</div>
    //     <div>01</div>
    //     <div>01</div>

     <div className=" card">
      <div className="card-header p-2 self-end">
        <div className="card-title-group self-end">
          <h5 className="card-title ">{recipe.title}</h5>
          {/* <div className="card-date">{Date()}</div> */}
        </div>
      </div>
      <div className="p-2">
      <Link to={`/${recipe.recipe_id}`} state={{ recipe: recipe }}>
      <img className="card-image" src={food} alt="Logo" />
      </Link>
      </div>
      <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader className="pl-2 pr-2" onClick={() => handleOpen(1)}>
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
      </Fragment>
      {/* <div className="card-text">
        <strong>Steps:</strong>
        <ol>
        {recipe.steps.map(step => {
          return (<li>{step}</li>)
        })}
        </ol>
        <strong>Ingredients:</strong>

      </div> */}
      <div className="card-like-bar p-2">
        {false ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{"7"}</b> people like this.
        </div>
      </div>
    </div>
          // </div>
  );
}