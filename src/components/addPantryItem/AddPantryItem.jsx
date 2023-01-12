import React from 'react';
import TextInput from 'react-autocomplete-input';
import {useNavigate} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';


const predefinedCategories = ['Veggie', 'Fruit', 'Grain', 'Protein', 'Dairy', 'Other'];

const AddPantryItem = (props) => {
  const { user } = useAuth0();

  const [ingredientOptions, setIngredientOptions] = React.useState([{id: 2341, ingredients_name: 'apple'}, {id: 5693, ingredients_name: 'banana'}, {id: 8492, ingredients_name: 'pear'}, {id: 9076, ingredients_name: 'orange'}]);
  const [customIngredient, setCustomIngredient] = React.useState('');
  const [usingCustomIngredient, setUsingCustomIngredient] = React.useState(false);
  const [expiryDate, setExpiryDate] = React.useState('2022-11-21');
  const [category, setCategory] = React.useState('Other');
  const [systemIngredient, setSystemIngredient] = React.useState('');

  const navigate = useNavigate();


  // initial load
  React.useEffect(() => {
    // TODO: get email from Auth0
    // TODO: get ingredientOptions from server
    axios.get(`/ingredients`)
    .then(result => {
      setIngredientOptions(result.data);
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if(usingCustomIngredient && customIngredient === '') {
      window.alert('invalid custom ingredient');
    } else if(!usingCustomIngredient && systemIngredient === '') {
      window.alert('invalid system ingredient');
    } else {
      axios.post(`/pantry`, {
        name: (usingCustomIngredient ? customIngredient : systemIngredient),
        date: new Date(Number(expiryDate.substr(0, 4)), Number(expiryDate.substr(5, 2)) - 1, Number(expiryDate.substr(8, 2))).getTime(),
        category: category,
        email: user.email
      }).catch(error => console.log(error));
      navigate('/pantryItems');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8 dark:text-white">
      <label className="mt-3 text-2xl text-accent dark:text-white">Add to Pantry</label>
      <label className='flex gap-2 dark:text-white'>
        <input type='radio' className="checked:text-primary" onClick={() => setUsingCustomIngredient(false)} defaultChecked={true} name='ingredientType' />
        System Ingredient:
      </label>
      <TextInput
        options={ingredientOptions.map(i => i.ingredients_name)} trigger={''} spacer={''} component={'text'}
        disabled={usingCustomIngredient} matchAny={true} maxOptions={25} onChange={(string) => {
          setSystemIngredient(string)}
        }
        className='w-60 h-6 p-2 rounded-md' />
      <label className='flex gap-2 dark:text-white'>
        <input type='radio' className="checked:text-primary" name='ingredientType' onClick={() => setUsingCustomIngredient(true)} />
        Custom Ingredient:
      </label>
      <input type="text" value={customIngredient} disabled={!usingCustomIngredient} onChange={(e) => setCustomIngredient(e.target.value)}
        className='w-60 h-6 p-2 rounded-md'/>
      <label className='flex gap-2 dark:text-white'>
        Expiry Date:
        <input type='date' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)}
        className='hover:cursor-pointer w-30 h-6 p-2 rounded-md' />
      </label>
      <label>Category:</label>
      <div className='flex w-5/6 flex-wrap gap-10 justify-center'>
        {predefinedCategories.map((cat, i) => {
          if(cat === 'Other') {
            return (
              <label key={i} className='flex gap-2 dark:text-white'>
                <input type='radio' className="checked:text-primary" onClick={() => setCategory(cat)} defaultChecked={true} name='category' />
                {cat}
              </label>
            )
          } else {
            return (
              <label key={i} className='hover:cursor-pointer flex gap-2 dark:text-white'>
                <input type='radio' className="checked:text-primary" onClick={() => setCategory(cat)} name='category' />
                {cat}
              </label>
            )
          }
        })}
      </div>
      <input type="submit" value="Add Ingredient" className="hover:cursor-pointer rounded-lg p-3 text-white bg-accent"/>
    </form>
  )
}

export default AddPantryItem;