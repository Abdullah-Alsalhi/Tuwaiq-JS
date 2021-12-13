import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <p>
        <Contact />
      </p>
      <p>
        <About />
      </p>
      <span>
        <Card
          obj={{
            title: "ReactJs",
            img: "https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png",
            color: "blue",
          }}
        />
      </span>
      <span>
        <Card
          obj={{
            title: "JavaScript",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
            color: "yellow",
          }}
        />
      </span>
      <span>
        <Card
          obj={{
            title: "NodeJs",
            img: "https://logowik.com/content/uploads/images/nodejs.jpg",
            color: "greenyellow",
          }}
        />
      </span>
    </div>
  );
}

export default App;
