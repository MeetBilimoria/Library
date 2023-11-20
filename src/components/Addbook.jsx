import React, { useState } from 'react'
import "../components/Addbook.css"
import axios from 'axios'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'


//Adding Book to the database
const Addbook = () => {
  const history = useNavigate();
  const[inputs ,setInputs] = useState({
    name:"",
    description:"",
    author:"",
    price:"",
    image:"",
  })
  // Taking the input from the input field
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //sending the inputs to the server
  const sendRequest =async()=>{
    await axios.post("http://localhost:5001/book",{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image)
    }).then(res=>res.data);
  }

  //Navigation to the other page after submit
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(inputs)
    sendRequest().then(()=>history('/book'))
  }
  return (
    <>
    <Navbar/>
    <form onSubmit={handleSubmit}>
    <div>
      <div className="abbg">
        <div className="adcontainer">
          <div className="bookcontain">
            <div className="inputt">
              <p>BookName</p>
              <input type="text" placeholder='Name of Books' name='name' value={inputs.name} onChange={handleChange}/>
            </div>
            <div className="inputt">
              <p>Author</p>
              <input type="text" placeholder='Name of Author' name='author' value={inputs.author} onChange={handleChange}/>
            </div>
            <div className="inputt">
              <p>Description</p>
              <input type="text" placeholder='Description of the Book' name='description' value={inputs.description} onChange={handleChange}/>
            </div>
            <div className="inputt">
              <p>Price</p>
              <input type="text" placeholder='Best price for the Book' name='price' value={inputs.price} onChange={handleChange}/>
            </div>
            <div className="inputt">
              <p>Image</p>
              <input type="text" placeholder='Upload your Image'name='image' value={inputs.image} onChange={handleChange}/>
            </div>
            
          </div>
          <button className='add_book'>Submit</button>
        </div>
      </div>
    </div>
    </form>
    </>
  )
}

export default Addbook