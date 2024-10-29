import React from "react";
import LemonDessert from "../Icons_assets/lemon dessert.jpg";
import Bruchetta from "../Icons_assets/bruchetta.svg";
import GreekSalad from "../Icons_assets/greek salad.jpg";

function Highlights(){
  return (
    <article className="contenedorPrincipal">
      <div className="highBox1">
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className="highBox2">
        <div className="highBoxDish">
        <img src={Bruchetta} alt="Bruchetta"></img>
        <p>s</p>
        </div>
        <div className="highBoxDish">
        <img src={GreekSalad} alt="Greek salad"></img>
          <p>s</p>
        </div>
        <div className="highBoxDish">
        <img src={LemonDessert} alt="Lemon dessert"></img>
        <p>s</p>
        </div>
      </div>
    </article>
  );
}

export default Highlights;