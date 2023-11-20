import React, { useState } from 'react';
import "../components/Login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const history = useNavigate();
  const [detail, setDetail] = useState({
    user: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }), () => {
      console.log(detail);
    });
  };

  const sendRequest = async () => {
    try {
      const response = await axios.post("http://localhost:5500/register/register", {
        user: String(detail.user),
        email: String(detail.email),
        password: String(detail.password),
      });
      console.log("Data successfully passed to the database:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error sending request:", error);
      throw error;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(detail);
    sendRequest().then(() => history('/login'));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="body">
        <div className="wrapper">
          <h1>Sign Up</h1>
          <div className="input1">
            <input type="text" placeholder="Full Name" required value={detail.user} onChange={handleChange} name="user" />
          </div>
          <div className="input1">
            <input type="text" placeholder="Email" required value={detail.email} onChange={handleChange} name="email" />
          </div>
          <div className="input1">
            <input type="password" placeholder="Password" required value={detail.password} onChange={handleChange} name="password" />
          </div>
          <button type="submit" className="btn">Sign up</button>
          <p> Already have an account?
            <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Register;
