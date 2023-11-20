import React from 'react';
import { Link } from 'react-router-dom';
import "../components/Home.css"
import "../components/Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
        
        <Link className="logo" to="/home">BookStore.  </Link>  
        </div>

        <div className="menu">
               

          <Link className="home"to="/home">Home</Link> 
          <Link className='books' to="/book">Books</Link>
          <Link className='addbooks' to="/addbook">Add Books</Link> 
          <Link to="/">
          <button className='navlogout'>Logout</button>
        </Link>  
        </div>
      </div>
    </div>
  );
}

export default Navbar;