import React from "react";
import Restaurantimage from "../Icons_assets/restauranfood.jpg";

function Herosection(){
  return (
    <header>
      <div className="contenedorPrincipal">
        <div className="Herobox1">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean Restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a table</button>
        </div>
        <div className="Herobox2">
          <img src={Restaurantimage} alt="Little Lemon Restaurant image"></img>
        </div>
      </div>
    </header>
  );
}

export default Herosection;