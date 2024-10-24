import React from "react";
import logo from "../Icons_assets/Logo.svg";

function Header(){
  return (
    <header>
      <nav className="navbar">
      <div className="logo">
        <a href="#home">
          <img className="logoImg" src={logo} alt="Little Lemon logo"></img>
        </a>
      </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#orderonline">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;