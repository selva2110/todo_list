import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddList = ({newItem,setNewItem,handleSubmit}) => {
    
  return (
    <form className='addForm' onSubmit={handleSubmit} id='addform'>
        <label htmlFor='addForm'r>Add Item</label>
        <input
        autoFocus
        type='text'
        placeholder='Add Item'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required/>

        <button type='submit'
        aria-label='Add Item'
        >
            < FaPlus/>
        </button>
    </form>

  )
}

export default AddList