import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { useLocation } from 'react-router-dom'


const RecipeFull = ({toggleFavorite}) => {
    const location = useLocation()
  const { recipe } = location.state
  const [favorited, setFavorited] = useState(recipe.favorited)
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
    <motion.div className="mt-3 flex justify-center items-center"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
    <div className="ml-4 mr-4 md:w-3/4 lg:w-1/2 w-full flex flex-col ">

      <div className="w-full flex justify-between">
        <h1 className="mb-4 ml-1 self-start text-3xl font-black text-accent">{recipe.title}</h1>
        <div className="flex items-center">
        <button onClick={handleFavorite}>
{recipe.favorited ?          <svg className="ml-1 mr-1 self-end w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg> : <svg className="ml-1 mr-1 self-end w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>}
          </button>
          </div>
      </div>
      <div className="mb-8 ml-2 w-full">
        <h3 className="text-xl font-bold">Ingredients</h3>
        <ul className="ml-2 list-disc">
          {recipe.ingredients.map(ingredient => {
            return <li className="ml-4">{ingredient}</li>
          })}
        </ul>
      </div>
      <div className="ml-2">
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