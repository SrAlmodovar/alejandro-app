import React from "react";

function Herosection({ toggleReserve }){

  return (
    <header>
      <div id="reservations" className="contenedorPrincipal heroBoxPrincipal">
        <div className="heroBox1">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean Restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="reserveDisplay" href="#" onClick={toggleReserve}>Reserve a table</button>
        </div>
        <div className="heroBox2">
          <img className="heroImg" src="/Icons_assets/restauranfood.webp" alt="Little Lemon hero section"></img>
        </div>
      </div>
    </header>
  );
}

export default Herosection;