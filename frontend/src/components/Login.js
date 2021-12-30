import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LogVerify = () => {
    const userData = { password, email };
    axios
      .post(`http://localhost:3001/user/login`, userData)
      .then((response) => {
        // setTask(response.data);
        console.log(response.data);
        props.setIsLoggedIn(true)
        props.setUsername(response.data.username)
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  return (
    
    <div className="Login shadow-lg p-3 mb-5 bg-light row g-3 bg-light align-items-center border border-primary">
      
      <div>
        <form action="" className="col-auto">
          <h3 className="text-center blockquote p-3 mb-2 bg-dark.bg-gradient text-dark shadow-sm p-3 mb-5 bg-body rounded mb-5 border border-primary" >Todo App</h3>
          <h5 className="bg-light">Todo App Is To Manage Your Daily Duties</h5>
          <label htmlFor="email" className="email col-form-label">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <br />
          <label htmlFor="password" className="password col-form-label">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="P@sw0d"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <br />
          <input
            className="btn btn-outline-primary me-2"
            type="submit"
            value="Login"
            onClick={(e) => {
              e.preventDefault();
              LogVerify();
            }}
          ></input>
          <Link to="/Register" className="m-3 btn btn-sm btn-outline-secondary">Don't have an account?</Link>
        </form>
      </div>
    </div>
  );
}
