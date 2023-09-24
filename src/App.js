import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";
import React, { useState } from 'react'
import './App.css';
import AddList from "./AddList";
function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo_list')));

    const [newItem, setNewItem] =useState('') 

    const [search, setsearch] = useState('')

    const addItems = (item) => {
      const id = items.length? items[items.length -1].id +1 : 1;
      const addNewItem = {id, checked:false, item}
      const listItems = [...items, addNewItem]
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify(listItems))
    }

    const handleCheck =(id) =>{
               const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item)
               setItems(listItems)
               // localstorage setItem is sysntax dont confuse with above one
               localStorage.setItem("todo_list", JSON.stringify(listItems))
            }

    const delet = (id) =>{
                const d = items.filter((item)=> 
                item.id!==id)
                setItems(d)
                 // localstorage setItem is sysntax dont confuse with above one
                localStorage.setItem("todo_list", JSON.stringify(d))
            }

    const handleSubmit = (e) => {
     // e.prevenrdefault()
      if(!newItem) return;
      console.log(newItem)
      //add
      addItems(newItem)
      setNewItem('')
    }

   return(
    <div className="App">
     <Header title="To Do List"/>
     <AddList
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}/>
     <Search 
        search={search}
        setsearch={setsearch}/>
     <Content 
        items = {items.filter((item)=>(item.item).toLowerCase().includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        delet={delet}/>
     <Footer
       length={items.length}/>
    </div>
   )
}

export default App;
