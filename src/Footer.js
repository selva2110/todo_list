import React from 'react'

const Footer = ({length}) => {
    //const year = new Date();
  return (
    // <footer>Copyright &copy; {year.getFullYear()}  </footer>
    <footer>{length} {length===1? "item":"items"} Pending </footer>
  )
}

export default Footer