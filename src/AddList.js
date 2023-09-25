import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddList = ({newItem,setNewItem,handleSubmit}) => {
 const input = useRef()   
  return (
    <form className='addForm' onSubmit={handleSubmit} id='addform'>
        <label htmlFor='addForm'r>Add Item</label>
        <input
        autoFocus
        ref={input}
        type='text'
        placeholder='Add Item'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required/>

        <button type='submit'
        aria-label='Add Item'
        onClick={()=>input.current.focus()}
        >
            < FaPlus/>
        </button>
    </form>

  )
}

export default AddList