import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaEye, FaEyeSlash}  from 'react-icons/fa'
const handleClick = () => {
  console.log("welcome");
};

const Login = () => {
  const [show,setShow] = useState(false)
  const [type,setType] = useState('text')
  const handleShow =()=>{
    setShow(!show)
  }
  return (
    <section className="main">
      <div className="login">
        <img src="images/CBE logo.png" alt="logo" />
        <h2 className="greeting">welcome!</h2>
        <form action="#" className="login-form">
         <div className="option">
         <label htmlFor="login-option">Login As:</label>
          <select name="login-option" id="login-option">
            <option value="Director">Director</option>
            <option value="Reception Manager">Reception Manager</option>
            <option value="Receptionist">Receptionist</option>
          </select>
         </div>
          <input
            type="text"
            placeholder="your name.."
            required
            name="name"
            // value={name}
            id="name"
          />
         <div className="last ">
         <input
            type={show?'text':'password'}
            name="password"
            placeholder="your password"
            id="password"
            required
          />
          <Link to='/forgot' className="forgot-password">forgot password?</Link>
          <span className="show" onClick={handleShow}>
            {show?<FaEye size={18}  className="eye"/>:
            <FaEyeSlash size={18} className="eye"/>
          }
          </span>
         </div>
          <button className="login-btn">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
