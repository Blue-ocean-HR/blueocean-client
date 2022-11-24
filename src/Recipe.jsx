import React, {useState, useEffect} from 'react';
import heartFill from './recipe-card-assets/heart-fill.png';
import heartOutline from './recipe-card-assets/heart-outline.png';
import food from './recipe-card-assets/food.jpeg'
import {Link} from 'react-router-dom'

export default function Recipe({recipe}) {
  return (
    //  <div className="grid grid-cols-3 gap-4 mr-10 mb-10 max-w-md min-w-md">
    //     <div className="flex-wrap col-span-2 row-span-2">{recipe.title}</div>
    //     <div>Star</div>
    //     <div className="col-span-3">Image</div>
    //     <div>01</div>
    //     <div>01</div>

     <div classNameName=" card">
      <div classNameName="card-header p-2 self-end">
        <div classNameName="card-title-group self-end">
          <h5 classNameName="card-title ">{recipe.title}</h5>
          <div classNameName="card-date">{Date()}</div>
        </div>
      </div>
      <div classNameName="p-2">
      <Link to={`/recipe/${recipe.recipe_id}`} state={{ recipe: recipe }}>
      <img classNameName="card-image" src={food} alt="Logo" />
      </Link>
      </div>
      <div classNameName="card-text">
        <strong>Steps:</strong>
        <ol>
        {recipe.steps.map(step => {
          return (<li>{step}</li>)
        })}
        </ol>
        <strong>Ingredients:</strong>
        <ul>
        {recipe.ingredients.map(ingredient => {
          return (<li>{ingredient}</li>)
        })}
        </ul>
      </div>
      <div classNameName="card-like-bar p-2">
        {false ? (
          <img classNameName="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img classNameName="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div classNameName="like-text">
          <b>{"7"}</b> people like this.
        </div>
      </div>
    </div>
          // </div>
  );
}