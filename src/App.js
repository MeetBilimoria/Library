

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Books from "./components/Books";
import Addbook from "./components/Addbook";
import BookDetail from "./components/BookDetail";

import Register from "./components/Register";
import Loginpage from "./components/Loginpage";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/book" element={<Books />} />
          <Route path="/addbook" element={<Addbook />} />
          <Route path="/" element={<Loginpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book/:id" element={<BookDetail />}exact />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
