import React, { useState } from "react";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState("");
  const checkUser = (e) => {
    e.preventDefault()
    if (
      email === props.userInfo.email &&
      password === props.userInfo.password
    ) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  };

  return (
    <div className="Login">
      <form>
        <label>
          Email:
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="example@gmail.com"
            value={email}
          ></input>
        </label>
        <br />
        <label>
          password:
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="p@ssw0rd"
            value={password}
          ></input>
        </label>
        <br />
        <input
          onClick={checkUser}
          type="submit"
          value="Login"
        />
      </form>
      {validate === true && (
        <p style={{ color: "green" }}> Credential Correct</p>
      )}
      {validate === false && <p style={{ color: "red" }}> Credential wrong</p>}
    </div>
  );
}
