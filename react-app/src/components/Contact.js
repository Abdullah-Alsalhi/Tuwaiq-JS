import React from "react";

export default function Contact() {
  const myInfo = {
    myName: "Abdullah",
    phone: "000 XXX XXX",
    Github: "Abdullah-Alsalhi",
  };
  return (
    <div className="Contact">
      <h3>Contact Me</h3>
      <p>My name: {myInfo.myName}</p>
      <p>phone: {myInfo.phone}</p>
      <p>Github account: {myInfo.Github}</p>
    </div>
  );
}
