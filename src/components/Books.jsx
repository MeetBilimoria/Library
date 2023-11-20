import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from "../components/Book";
import "../components/Book.css";
import Navbar from '../components/Navbar';

const URL = "http://localhost:5001/book/";


//pagination 
const Books = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchBooks = async (page) => {
    try {
      const response = await axios.get(`${URL}?page=${page}`);
      setBooks(response.data.books);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks(currentPage);
    console.log(`Current Page: ${currentPage}, Total Pages: ${totalPages}`);
  }, [currentPage, totalPages]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  //pagination Ends
  return (
    <>
      <Navbar />
      <div className="cardbg">
        <div className="card-container">
          {books.map((book, i) => (
            <Book key={i} book={book} />
          ))}
        </div>

       
        <div className="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Books;
