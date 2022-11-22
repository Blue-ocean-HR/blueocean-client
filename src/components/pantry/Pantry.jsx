import React from 'react';
import {Link} from 'react-router-dom';

const Pantry = () => {

  return (
    <div className='flex flex-col'>

      <Link to='/addPantryItem'>
        <div className="rounded-full w-14 h-14
                        flex items-center justify-center
                        bg-accent text-light text-2xl
                        fixed bottom-2 right-2
                        ">+</div>
      </Link>
    </div>
  )
}
export default Pantry;