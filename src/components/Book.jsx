import React from 'react';
import "../components/Book.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;

  //Delete Function with the Id Associate with the book
  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5001/book/${_id}`);
      console.log("Book deleted successfully");
      window.location.reload();
    
      history("/book");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className='card-grid'>
  <div className='card'>
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <article>Written By : {author}</article>
    
    <p>{description}</p>
    <h2>Price:₹ {price}</h2>
    <div className="funbutton">
    <Link to={`/book/${_id}`}>
      <button className='update'>Update</button>
    </Link>
    <button onClick={deleteHandler}className='delete'>Delete</button>
    </div>
   
  </div>

</div>
  );
}

export default Book;
