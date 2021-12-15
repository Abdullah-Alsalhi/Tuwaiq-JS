import React from "react";

export default function Register() {
  return (
    <div className="Register">
      <form>
        <label>
          Email:<input type="email" placeholder="example@gmail.com"></input>
        </label>
        <br />
        <label>
          password:<input type="password" placeholder="p@ssw0rd"></input>
        </label>
        <br />
        <input type="submit" value="Register" />
        <span> </span>
      </form>
    </div>
  );
}
