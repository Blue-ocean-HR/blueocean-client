import React from 'react';
import PantryItem from './PantryItem.jsx';

const PantryList = ({ingredients}) => {
  return (
    <div className='flex flex-col gap-2 w-full md:w-3/4 mx-auto'>
      {ingredients.map(ingredient => <PantryItem key={ingredient.id} ingredient={ingredient} />)}
    </div>
  )
}

export default PantryList;