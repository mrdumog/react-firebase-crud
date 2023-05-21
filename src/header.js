import React from "react";
import logo from "./logo.svg";

function Header() {
  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React & Firebase CRUD App</p>
      </header>
    </React.Fragment>
  );
}

export default Header;
