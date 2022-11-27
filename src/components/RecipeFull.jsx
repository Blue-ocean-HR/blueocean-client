import React, {useState} from 'react'
import {motion} from 'framer-motion'
import FavoriteButton from './FavoriteButton.jsx'
import { useLocation } from 'react-router-dom'


const RecipeFull = ({toggleFavorite}) => {
    const location = useLocation()
  const { recipe } = location.state
  return (
    <motion.div className="mt-3 flex justify-center items-center"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
    <div className="ml-4 mr-4 md:w-3/4 lg:w-1/2 w-full flex flex-col ">

      <div className="w-full flex justify-between">
        <h1 className="mb-4 ml-1 self-start text-3xl font-black text-accent dark:text-white">{recipe.title}</h1>
        <div className="flex items-center">
          <FavoriteButton recipe={recipe} toggleFavorite={toggleFavorite} />
          </div>
      </div>
      <div className="mb-8 ml-2 w-full dark:text-white">
        <h3 className="text-xl font-bold">Ingredients</h3>
        <ul className="ml-2 list-disc">
          {recipe.ingredients.map(ingredient => {
            return <li className="ml-4">{ingredient}</li>
          })}
        </ul>
      </div>
      <div className="ml-2 dark:text-white">
        <h3 className="text-xl font-bold">Directions</h3>
        {recipe.steps.map((item, index) => {
            return (
              <ul key={index} className="font-bold ml-2">Step {index + 1}
            <li key={index} className="font-normal ml-2">{item}</li>
            </ul>
            )
          })}
      </div>
    </div>
    </motion.div>
  )
}

export default RecipeFull