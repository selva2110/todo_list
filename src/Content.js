import React, { useState } from 'react'

const Content = () => {

    const [name, newName] = useState();
    function namechange(){
    const name = ["E", "g", "gi"];
    const int = Math.floor(Math.random()*name.length);
    newName(name[int]);
 }

 //const handleClick = (name) => {
 //   alert(`Hai ${name}`)
 //}

 //const dclick= (e) =>{
   // console.log(e);
    //e.target.innerText
    //e.target
//}

/*function increment(){
    setCount(count+1)
}

function decrement(){
    setCount(count-1)
}*/



  return (
    <main> 
        <p className='p'>Let's {name} money</p> 
        <button onClick={namechange}>Click Me</button>

        {/* <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button> */}

        </main>)
}

export default Content