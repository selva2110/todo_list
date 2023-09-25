import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";
import React, { useEffect, useState } from 'react'
import './App.css';
import AddList from "./AddList";
import ApiRequest from "./ApiRequest";
function App() {
 
 const API_URL = '  http://localhost:3500/items'

  const [items, setItems] = useState([]);
// or useState(JSON.parse(localStorage.getItem('todo_list')) || []) --> to avoide app crashing if there is nothing in local storage or use  useEffect
    const [newItem, setNewItem] =useState('') 
    const [search, setsearch] = useState('')
    const [fetcherr, setFtechErr] =useState(null)
    const [isLoading, setIsLoading] =useState(true)
     
   useEffect(()=>{
      const fecthItems = async ()=>{
       try{
       const responce = await fetch(API_URL)
       if(!responce.ok) throw Error('data not found')
       const listItems = await responce.json()
       setItems(listItems)
       }catch(err){
       setFtechErr(err.message)
       }
       finally{
         setIsLoading(false)
       }
      }

      setTimeout(() => {
         (async ()=> await fecthItems())()}, 0)},[])

      

    const addItems = async (item) => {
      const id = items.length? items[items.length -1].id +1 : 1;
      const addNewItem = {id, checked:false, item}
      const listItems = [...items, addNewItem]
      setItems(listItems)
      //localStorage.setItem("todo_list", JSON.stringify(listItems))

      const postOption ={
         method: 'POST',
         headers:{
            'content-type':'application/json'
         },
         body: JSON.stringify(addNewItem)
      }
       const result = await ApiRequest(API_URL,postOption)
       if(result) setFtechErr(result)
    }

    const handleCheck = async (id) =>{
               const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item)
               setItems(listItems)

               const myItem= listItems.filter((item)=> item.id===id)
               const updateOptions = {
                  method: 'PATCH',
                  headers:{
                     'content-type':'application/json'
                  },
                  body: JSON.stringify({checked:myItem[0].checked
               })}
               const requrl =`${API_URL}/${id}`
              // console.log(requrl)
                const result = await ApiRequest(requrl,updateOptions)
                if(result) setFtechErr(result)
               // localstorage setItem is sysntax dont confuse with above one
               //localStorage.setItem("todo_list", JSON.stringify(listItems))
            }

    const delet = async (id) =>{
                const d = items.filter((item)=> 
                item.id!==id)
                setItems(d)
                 // localstorage setItem is sysntax dont confuse with above one
                //localStorage.setItem("todo_list", JSON.stringify(d))
               
               const del = {
                  method:"DELETE"
               }
               
                const url = `${API_URL}/${id}`
                //console.log(url)
                const result = await ApiRequest(url,del)
                if(result) setFtechErr(result)
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
      <main>
         {isLoading && <p>{`Loading items...`}</p>}
         {fetcherr && <p>{`Error: ${fetcherr}`}</p>}
        { !isLoading && !fetcherr && <Content 
         items = {items.filter((item)=>(item.item).toLowerCase().includes(search.toLowerCase()))}
         handleCheck={handleCheck}
         delet={delet}/>}
      </main>  
     <Footer
       length={items.length}/>
    </div>
   )
}

export default App;
