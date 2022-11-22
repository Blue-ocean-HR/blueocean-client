import React from 'react';
import TextInput from 'react-autocomplete-input';
import {useNavigate} from 'react-router-dom';


const predefinedCategories = ['Veggie', 'Fruit', 'Grain', 'Protein', 'Dairy', 'Other'];

const AddPantryItem = (props) => {

  const [ingredientOptions, setIngredientOptions] = React.useState([{id: 2341, name: 'apple'}, {id: 5693, name: 'banana'}, {id: 8492, name: 'pear'}, {id: 9076, name: 'orange'}]);
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
    // axios.get(`${APIURL}/getIngredients`, {
    //   params: {
    //     email: 'smth idfk'
    //   }
    // })
    // .then(result => {
    //   console.log(result.rows);
    // });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if(usingCustomIngredient && customIngredient === '') {
      window.alert('invalid custom ingredient');
    } else if(!usingCustomIngredient && systemIngredient === '') {
      window.alert('invalid system ingredient');
    } else {
      // axios.post(`${APIURL}/pantry`, {
      //   params: {
      //     email: 'smth idfk',
      //     ...other stuff
      //   }
      // });
      navigate('/pantry');
    }
  }

  function handleSystemIngredientChange(string) {
    const index = ingredientOptions.map(i => i.name).indexOf(string);
    const id = ingredientOptions[index].id;
    setSystemIngredient(id);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8">
      <label className='flex gap-2'>
        <input type='radio' onClick={() => setUsingCustomIngredient(false)} defaultChecked={true} name='ingredientType' />
        System Ingredient:
      </label>
      <TextInput
        options={ingredientOptions.map(i => i.name)} trigger={''} spacer={''} component={'text'}
        disabled={usingCustomIngredient} matchAny={true} maxOptions={25} onSelect={handleSystemIngredientChange}
        className='w-60 h-6 p-2 rounded-md' />
      <label className='flex gap-2'>
        <input type='radio' name='ingredientType' onClick={() => setUsingCustomIngredient(true)} />
        Custom Ingredient:
      </label>
      <input type="text" value={customIngredient} disabled={!usingCustomIngredient} onChange={(e) => setCustomIngredient(e.target.value)}
        className='w-60 h-6 p-2 rounded-md'/>
      <label className='flex gap-2'>
        Expiry Date:
        <input type='date' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)}
        className='w-30 h-6 p-2 rounded-md' />
      </label>
      <label>Category:</label>
      <div className='flex w-5/6 flex-wrap gap-10'>
        {predefinedCategories.map((cat, i) => {
          if(cat === 'Other') {
            return (
              <label key={i} className='flex gap-2'>
                <input type='radio' onClick={() => setCategory(cat)} defaultChecked={true} name='category' />
                {cat}
              </label>
            )
          } else {
            return (
              <label key={i} className='flex gap-2'>
                <input type='radio' onClick={() => setCategory(cat)} name='category' />
                {cat}
              </label>
            )
          }
        })}
      </div>
      <input type="submit" value="Add Ingredient" className="rounded-lg p-3 bg-accent"/>
    </form>
  )
}

export default AddPantryItem;