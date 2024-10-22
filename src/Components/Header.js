import React from "react";
import logo from "../Icons_assets/Logo.svg";

function Header(){
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Little Lemon logo"></img>
      </div>
      <nav>
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