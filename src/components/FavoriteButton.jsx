import React, {useState, useEffect} from 'react';

const FavoriteButton = ({recipe, toggleFavorite}) => {
  const [favorited, setFavorited] = useState(recipe.favorited)
  const handleFavorite = () => {
    if (favorited) {
      setFavorited(false)
      toggleFavorite(false, recipe.recipe_id)
    } else {
      setFavorited(true)
      toggleFavorite(true, recipe.recipe_id)
    }
  }
  useEffect(() => {
    setFavorited(recipe.favorited)
  }, [recipe])
 return (
  <button onClick={handleFavorite}>
  {favorited ?      <svg className="hover:text-black transition-all  ml-1 mr-1 self-end w-6 h-6 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="#ef5350" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg> : <svg className="hover:text-red-400 transition-all ml-1 mr-1 self-end w-6 h-6 dark:text-white text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>}
            </button>
 )
}

export default FavoriteButton