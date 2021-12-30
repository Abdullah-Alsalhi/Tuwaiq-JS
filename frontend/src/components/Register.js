import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const body = {
    username,
    password,
    email,
  };
  const registerPost = (body) => {
    axios
      .post(`http://localhost:3001/user/register`, body)
      .then((response) => {
        // setTask(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  return (
    <div className="Login border  shadow-lg p-3 mb-5 bg-light rounded row g-3 align-items-center border border-primary">
      <form action="" >
      <h3 className="text-center blockquote p-3 mb-2 bg-dark.bg-gradient text-dark shadow-sm p-3 mb-5 bg-body rounded mb-5 border border-primary" ><b>Todo App</b></h3>
          <h5 className="bg-light">Todo App Is To Manage Your Daily Duties</h5>
        <label htmlFor="username" className="email col-form-label"><b>Username</b></label>
        <input
          type="text"
          name="username"
          className="form-control"
          placeholder="write your name..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="email"><b>Email</b></label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="write your email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="password"><b>Password</b></label>
        <br />
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="write your password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br/>
        <input className='btn btn-outline-primary me-2'
          type="submit"
          value='Register'
          onClick={(e) => {
            e.preventDefault();
            registerPost(body);
          }}
        ></input>
        <Link to="/Login" className="btn btn-warning">have an account?</Link>
      </form>
      <br />
    </div>
  );
}
