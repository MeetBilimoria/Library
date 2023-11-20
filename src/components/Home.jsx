import React from 'react'
import "../components/Home.css"
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import books from "../images/bgremove.png"

const Home = () => {
  return (
    <>
    <div className="nvbar">
      <div className="logoo">BookStore.</div>
      <Link to="/login">
          <button className='login'>Logout</button>
        </Link>
    </div>
    <div className="homebg">
      <div className="box">
        <img src={books} className="book" alt="" />
        <div className="menuitems">

          <Link className="itemss"to="/home">Home</Link> 
          <Link className="itemss"to="/book">Store</Link> 
          <Link className="itemss"to="/addbook">Add Book</Link> 
          
         
        </div>
        <div className="content">Dive into our extensive catalog featuring a rich assortment of books, ranging from gripping novels and compelling biographies to insightful academic works and timeless classics. Whether you're seeking the latest releases or rediscovering beloved favorites, our carefully curated selection awaits your exploration.</div>
      </div>
     
    </div>
    <div className="footer">
      <p> Developed by : Bilimoria Meet</p>
       <p>Email : Bilimoriameet007@gmail.com</p>
        
      </div>
    </>
  )
}

export default Home