import React from "react";

function Footer(){
  return (
    <footer>
      <div className="contenedorPrincipal">
        <section className="boxFooter">
          <div>
          <img src="./Icons_assets/logo.svg"/>
          </div>
          <ul className="boxFooterTitle">
            <h4>Navigation</h4>
            <li><a href="#home">Home</a></li>
            <li><a href="#home">About</a></li>
            <li><a href="#home">Menu</a></li>
            <li><a href="#home">Reservations</a></li>
            <li><a href="#home">Order Online</a></li>
            <li><a href="#home">Login</a></li>
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