import React from 'react';
import {Link} from 'react-router-dom';

import PantryList from './PantryList.jsx'

const Pantry = () => {

  const [search, setSearch] = React.useState('');

  const [ingredients, setIngredients] = React.useState([
    { id: 400, name: 'pear', expiryDate: '2022-12-05', category: 'Fruit'},
    { id: 401, name: 'apple', expiryDate: '2022-12-12', category: 'Fruit'},
    { id: 402, name: 'banana', expiryDate: '2022-12-21', category: 'Fruit'},
    { id: 403, name: 'orange', expiryDate: '2022-11-25', category: 'Fruit'},
    { id: 404, name: 'peach', expiryDate: '2022-11-27', category: 'Fruit'},
    { id: 405, name: 'mango', expiryDate: '2022-11-29', category: 'Fruit'},
    { id: 666, name: 'Eye of Newt', expiryDate: '2067-11-21', category: 'Dairy'}
  ]);

  React.useEffect(() => {
    // TODO: Get Email, Request all user's pantry items, set ingredients
  }, []);

  return (
    <div className='flex flex-col'>
      <input type='text' placeholder='Search your pantry...' value={search} onChange={(e) => setSearch(e.target.value)} className='w-60 h-8 p-1 rounded-md bg-light self-center text-black border border-secondary m-2' />

      <PantryList ingredients={ingredients.filter(ingredient => ingredient.name.includes(search))} />

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