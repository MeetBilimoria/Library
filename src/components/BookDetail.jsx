import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "../components/Addbook.css"

import { useNavigate, useParams } from 'react-router';
import Navbar from './Navbar';


//Fetching the Book data from the server
const BookDetail = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
    const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/book/${id}`);
        console.log(response.data);
        setInputs(response.data.book);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchHandler();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const  sendRequest = async() =>{
    await axios.put(`http://localhost:5001/book/${id}`,{
        name:String(inputs.name),
        author:String(inputs.author),
        description:String(inputs.description),
        price:Number(inputs.price),
        image:String(inputs.image),

    }).then(res =>res.data)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(()=>history("/book"))
    console.log("Form submitted:", inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Navbar/>
      <div>
       
        <div className="abbg">
        <div className="title">Update Your Book Detail</div>
          <div className="adcontainer">
            <div className="bookcontain">
              <div className="inputt">
                <p>BookName</p>
                <input
                  type="text"
                  placeholder="Name of Book"
                  name="name"
                  value={inputs.name || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="inputt">
                <p>Author</p>
                <input
                  type="text"
                  placeholder="Name of Author"
                  name="author"
                  value={inputs.author || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="inputt">
                <p>Description</p>
                <input
                  type="text"
                  placeholder="Description of the Book"
                  name="description"
                  value={inputs.description || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="inputt">
                <p>Price</p>
                <input
                  type="text"
                  placeholder="Best price for the Book"
                  name="price"
                  value={inputs.price || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="inputt">
                <p>Image</p>
                <input
                  type="text"
                  placeholder="Upload your Image"
                  name="image"
                  value={inputs.image || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="add_book" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BookDetail;
