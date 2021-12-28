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
    <div className="Login">
      <div>
        <form action="">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            placeholder="write your name here"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <br />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            placeholder="write your password here"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <br />
          <input
            type="submit"
            value="Login"
            onClick={(e) => {
              e.preventDefault();
              LogVerify();
            }}
          ></input>
          <Link to="/Register">Don't have an account?</Link>
        </form>
      </div>
    </div>
  );
}
