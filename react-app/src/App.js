import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [user, setUser] = useState({
    email: "Abdullah@gmail.com",
    password: "1234",
  });

  return (
    <div className="App">
      {isLoginPage ? (
        <>
          <Login userInfo={user} />
          <button
            onClick={() => {
              setIsLoginPage(false);
            }}
          >
            Go to Register
          </button>
        </>
      ) : (
        <>
          <Register />
          <button
            onClick={() => {
              setIsLoginPage(true);
            }}
          >
            Go to Login
          </button>
        </>
      )}

      <br />
    </div>
  );
}

export default App;
