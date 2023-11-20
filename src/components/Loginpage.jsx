import React, { useState } from 'react';
import "../components/Login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Loginpage = () => {

  const history = useNavigate();
  const [detail, setDetail] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5500/login/login", {
      email: detail.email,
      password: detail.password,
    })
      .then(result => {
        console.log(result);
        if (result.data === "success") {
          history('/home');
        }else{
          window.alert("Invalid email or password. Please try again.");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="body">
        <div className="wrapper">
          <h1>Sign In</h1>
          <div className="input1">
            <input type="text" placeholder="Email" required value={detail.email} onChange={handleChange} name="email" />
          </div>
          <div className="input1">
            <input type="password" placeholder="Password" required value={detail.password} onChange={handleChange} name="password" />
          </div>
          <button type="submit" className="btn">Sign in</button>
          <p> Don't have an account?
            <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Loginpage;
