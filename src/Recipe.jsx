import React, {useState, useEffect} from 'react';
import heartFill from './recipe-card-assets/heart-fill.png';
import heartOutline from './recipe-card-assets/heart-outline.png';
import food from './recipe-card-assets/food.jpeg'
import {Link} from 'react-router-dom'

export default function Recipe({data}) {
  return (
    <div className="flex justify-center items-center mt-10">
    <div className=" card">
      <div className="card-header p-2">
        <div className="profile">
          <span className="letter">{data.author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{data.title}</h5>
          <div className="card-date">{data.date}</div>
        </div>
      </div>
      {/* Add recipe_id to link */}
      <div className="p-2">
      <Link to={`/${1234}`}>
      <img className="card-image" src={food} alt="Logo" />
      </Link>
      </div>
      <div className="card-text">{data.description}</div>
      <div className="card-like-bar p-2">
        {data.liked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{data.likeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
    </div>
  );
}