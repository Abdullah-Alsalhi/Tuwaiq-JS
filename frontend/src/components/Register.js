import React, { useState } from "react";
import axios from "axios";

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
    <div className="Register">
      <form action="" >
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          className="username"
          placeholder="write your name..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          className="email"
          placeholder="write your email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          className="password"
          placeholder="write your password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br/>
        <input
          type="submit"
          value='Register'
          onClick={(e) => {
            e.preventDefault();
            registerPost(body);
          }}
        ></input>
      </form>
      <br />
    </div>
  );
}
