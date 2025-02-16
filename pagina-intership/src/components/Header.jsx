import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(prevState => !prevState);
  };

  return (
    <div className="container">
      <div className="nav-container">
          <img src="/images/logo.png" alt="Logo" className="logo"/>
        <div className={`nav-buttons ${menuActive ? 'active' : ''}`}>
          <div className="header-buttons">
            <button>Home</button>
            <button>About</button>
            <button>Pages</button>
            <button>Pricing</button>
            <button>Cart (0)</button>
          </div>
          <div className="nav-actions">
            <button className="login">Login</button>
            <button className="btn-quote">Get a quote</button>
          </div>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>☰</div>
      </div>
    </div>
  );
}

export default Header;
