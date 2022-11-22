import React, {useState} from 'react'
import {motion} from 'framer-motion'



const RecipeFull = () => {
  const [favoriteClass, setFavoriteClass] = useState('none')
  const handleFavorite = () => {
    favoriteClass === 'none' ? setFavoriteClass("yellow") : setFavoriteClass("none")
  }
  return (
    <motion.div className="mt-3 flex justify-center items-center"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
    <div className="ml-4 mr-4 md:w-3/4 lg:w-1/2 w-full flex flex-col border-black border-2">

      <div className="w-full flex justify-between">
        <h1 className=" ml-1 self-start text-3xl font-black text-accent">Recipe Title</h1>
        <div className="flex items-center">Favorite
        <button onClick={handleFavorite}>
          <svg className="ml-1 mr-1 self-center w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill={favoriteClass} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          </button>
          </div>
      </div>
      <div className="ml-2 w-full">
        <h3 className="text-xl font-bold">Ingredients</h3>
        <ul className="ml-2 list-disc">
          {[1,2,3,4].map(item => {
            return <li className="ml-4">{item}</li>
          })}
        </ul>
      </div>
      <div className="ml-2">
        <h3 className="text-xl font-bold">Directions</h3>
        {[1,2,3,4].map(item => {
            return (
              <ul className="font-bold ml-2">Step {item}
            <li className="font-normal ml-2">{item}</li>
            </ul>
            )
          })}
      </div>
    </div>
    </motion.div>
  )
}

export default RecipeFull