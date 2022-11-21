import React, {useState, useEffect} from 'react';
import heartFill from './recipe-card-assets/heart-fill.png';
import heartOutline from './recipe-card-assets/heart-outline.png';
import food from './recipe-card-assets/food.jpeg'

export default function Recipe({data}) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{data.author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{data.title}</h5>
          <div className="card-date">{data.date}</div>
        </div>
      </div>
      <img className="card-image" src={food} alt="Logo" />
      <div className="card-text">{data.description}</div>
      <div className="card-like-bar">
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
  );
}