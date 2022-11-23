import React, {useState, useEffect} from 'react';
import heartFill from './recipe-card-assets/heart-fill.png';
import heartOutline from './recipe-card-assets/heart-outline.png';
import food from './recipe-card-assets/food.jpeg'
import {Link} from 'react-router-dom'

export default function Recipe({recipe}) {
  return (
    <div className="flex justify-center items-center mt-10">
    <div className=" card">
      <div className="card-header p-2">
        <div className="profile">
          <span className="letter">{""}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{recipe.title}</h5>
          <div className="card-date">{Date()}</div>
        </div>
      </div>
      {/* Add recipe_id to link */}
      <div className="p-2">
      <Link to={`/${1234}`}>
      <img className="card-image" src={food} alt="Logo" />
      </Link>
      </div>
      <div className="card-text">
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
    </div>
  );
}