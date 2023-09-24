import './Content.css';
import ItemList from './ItemLi';

const Content = ({items,handleCheck,delet}) => {

//     const [name, newName] = useState();
//     function namechange(){
//     const name = ["E", "g", "gi"];
//     const int = Math.floor(Math.random()*name.length);
//     newName(name[int]);
//  }

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

//  const a=[-1,-2,0,2,1];
//  const itemm =a.filter(n => n>=0).map(n => ({number:n}))
//                        ((n) => { n>=0})
//  console.log(itemm)




  return (
    <main> 
        {/* <p className='p'>Let's {name} money</p> 
        <button onClick={namechange}>Click Me</button> */}

        {/* <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button> */}
          
         {(items.length) ? (<ItemList 
          items = {items}
          handleCheck={handleCheck}
          delet={delet}/>) : (<p>Your List is Empty</p>)} 
        

        </main>)
}

export default Content