import React from "react";
//import logo from "./logo.svg";
import "./index.css";
import Menu from "./Menu";

const NavMenu = [
  {
    text: "Home",
    link: "#",
    active: true
  },
  {
    text: "Services",
    link: "#",
    active: false,
    submenu: ["For entrepreneurs", "For students", "For hobbyists"]
  },
  {
    text: "Contact",
    link: "#",
    active: false
  }
];

function App() {
  return (
    <div className="App">
      <Menu navmenu={NavMenu} />
    </div>
  );
}

export default App;
