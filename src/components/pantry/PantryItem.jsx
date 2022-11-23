import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const PantryItem = ({ingredient}) => {
  const { user } = useAuth0();

  const [editing, setEditing] = React.useState(false);
  const [expiryDate, setExpiryDate] = React.useState(ingredient.expiryDate);
  const [name, setName] = React.useState(ingredient.name);

  const navigate = useNavigate();

  function handleSave() {
    setEditing(false);
    if(name === '') {
      window.alert('invalid name');
    } else {
    // TODO: Axios update call w/ name, expiryDate, pantryID
      axios.put(`/pantry`, {
        name: name,
        date: new Date(Number(expiryDate.substr(0, 4)), Number(expiryDate.substr(5, 2)) - 1, Number(expiryDate.substr(8, 2))).getTime(),
        id: ingredient.id
      });
    }
  }

  function handleDelete() {
  // TODO: Axios delete call w/ Email & Pantry Item ID (ingredient.id)
    axios.delete(`/pantry`, {
      id: ingredient.id
    });
    navigate('/pantry');
  }

  return (
    <div className='flex'>
      <div className='m-1 p-2 bg-secondary rounded-md text-primary flex justify-between grow'>
        {!editing && <div>{name}</div>}
        {!editing && <div>{expiryDate}</div>}
        {editing && <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='w-40 h-6 p-1 rounded-md bg-light text-black' />}
        {editing && <input type='date' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} className='w-24 h-6 p-1 rounded-md bg-light text-xs text-black' />}
      </div>
      {!editing && <div className='m-1 p-2 bg-primary rounded-md text-light' onClick={() => setEditing(true)} >Edit</div>}
      {editing && <div className='m-1 p-2 bg-primary rounded-md text-light' onClick={handleSave} >Save</div>}
      {!editing && <div className='m-1 p-2 bg-primary rounded-md text-light' onClick={handleDelete} >X</div>}
    </div>

  )
}

export default PantryItem;