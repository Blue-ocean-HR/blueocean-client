import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import PantryList from './PantryList.jsx'
const predefinedCategories = ['Veggie', 'Fruit', 'Grain', 'Protein', 'Dairy', 'Other'];

const Pantry = ({ingredients, setIngredients}) => {
  const { user, isAuthenticated } = useAuth0();
  const [search, setSearch] = React.useState('');
  const [filter, setFilters] = React.useState('');

  React.useEffect(() => {
    if (isAuthenticated) {
    axios.get(`/pantry`, {
      params: {
        email: user.email
      }
    })
    .then(result => {
      setIngredients(result.data.length > 0 ? result.data : []);
    }).catch(error => console.log(error))
  }
  }, [user]);

  return (
    <div className='flex flex-col'>
      <div className="flex justify-center m-4">
      <h2 className="text-2xl font-bold dark:text-white text-accent">What's in the Pantry/Fridge?</h2>
      </div>
      <input type='text' placeholder='Search your pantry...' value={search} onChange={(e) => setSearch(e.target.value)} className='w-60 h-8 p-1 rounded-md bg-light self-center text-black border border-secondary m-2' />

      <label className='w-60 p-1 self-center font-bold text-black'>Category:</label>

      <select name="cats" id="Category" onChange={(e) => setFilters(e.target.value)}
        className='hover:cursor-pointer w-60 h-8 p-1 rounded-md bg-light self-center text-black border border-secondary m-2' >
        <option value=''>All</option>
        {predefinedCategories.map((cat, i) => {
          return <option value={cat} key={i}>{cat}</option>
        })}
      </select>
      <div className="flex items-center justify-center">
      <PantryList ingredients={ingredients.filter(ingredient => ingredient.pantry_ingredient.includes(search) && ingredient.category.includes(filter))} />
      </div>
      <div className="flex items-center justify-center flex-col">

      <Link to='/addPantryItem'>
        <div className="mt-3 rounded-full w-14 h-14
                        flex items-center justify-center
                        bg-accent text-light text-2xl
                        ">+</div>
      </Link>
      <div className="self-center mt-3 font-bold">Add an item to the Pantry</div>
      </div>
    </div>
  )
}
export default Pantry;