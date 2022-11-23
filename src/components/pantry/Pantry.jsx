import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";

import PantryList from './PantryList.jsx'

const predefinedCategories = ['Veggie', 'Fruit', 'Grain', 'Protein', 'Dairy', 'Other'];

const Pantry = () => {
  const {user, isAuthenticated} = useAuth0()
  const [search, setSearch] = React.useState('');
  const [filter, setFilters] = React.useState('');

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
    if (isAuthenticated) {
      axios.get('/pantry', {params: {email: "max.philip1@gmail.com"}}).then(data => {
        //  set ingredients here
        console.log(data)
        }).catch(error => console.log(error))
    }
  }, [user]);

  return (
    <div className='flex flex-col'>
      <input type='text' placeholder='Search your pantry...' value={search} onChange={(e) => setSearch(e.target.value)} className='w-60 h-8 p-1 rounded-md bg-light self-center text-black border border-secondary m-2' />

      <label className='w-60 p-1 self-center text-primary'>Category:</label>

      <select name="cats" id="Category" onChange={(e) => setFilters(e.target.value)}
        className='w-60 h-8 p-1 rounded-md bg-light self-center text-black border border-secondary m-2' >
        <option value=''>All</option>
        {predefinedCategories.map((cat, i) => {
          return <option value={cat} key={i}>{cat}</option>
        })}
      </select>

      <PantryList ingredients={ingredients.filter(ingredient => ingredient.name.includes(search) && ingredient.category.includes(filter))} />

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