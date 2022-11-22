import React from 'react';

const PantryItem = ({ingredient}) => {
  return (
    <div className='flex'>
      <div className='m-2 p-2 bg-primary rounded-md text-light flex justify-between grow'>
        <div>{ingredient.name}</div>
        <div>{ingredient.expiryDate}</div>
      </div>
      <div className='m-2 p-2 bg-primary rounded-md text-light flex gap-2'>
        <div>Edit</div>
        <div>X</div>
      </div>
    </div>

  )
}

export default PantryItem;