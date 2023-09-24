import React from "react";

//or ({title}) ---> destructuring
const Header = (props) =>{
    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    )
};

//if no title props is defined in App.js
 Header.defaultProps ={ title:"Selva"}
export default Header;