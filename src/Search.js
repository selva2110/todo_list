import React from 'react'

const Search = ({search, setsearch}) => {
  return (
   <form className='searchForm' onSubmit={(e) => e.preventDefault}>
    <label htmlFor='searchForm'> Search</label>
    <input  
    id="search" 
    type='text'
    role='searchbox'
    placeholder='Search Item'
    value={search}
    onChange={(e) => setsearch(e.target.value)}/>
   </form>
  )
}

export default Search