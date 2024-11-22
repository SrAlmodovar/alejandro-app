import React from "react";

function Footer(){
  return (
    <footer>
      <div className="contenedorPrincipal">
        <section className="boxFooter">
          <div>
          <img alt="logo" src="./Icons_assets/logo.svg"/>
          </div>
          <ul className="boxFooterTitle">
            <h4>Navigation</h4>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#orderonline">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
          <ul className="boxFooterTitle">
            <h4>Contact</h4>
            <li><a href="#home">Adress</a></li>
            <li><a href="#home">Phone Number</a></li>
            <li><a href="#home">Email</a></li>
          </ul>
          <ul className="boxFooterTitle">
            <h4>Social media links</h4>
            <li><a href="#home">Adress</a></li>
            <li><a href="#home">Phone number</a></li>
            <li><a href="#home">Email</a></li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;