import React from 'react'
import LineItem from './LineItem'


const ItemList = ({items,handleCheck,delet}) => {
  return (
    <ul>
            
        {items.map((item) => (<LineItem 
          item = {item}
          key={item.id}
          handleCheck={handleCheck}
          delet={delet}/>))}
            
        
    </ul>
  )
}

export default ItemList