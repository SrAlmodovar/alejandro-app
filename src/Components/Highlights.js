import React from "react";
import {Dishes} from "./Dishes.js";

function Highlights(){
  return (
    <section className="contenedorPrincipal">
      <div className="highBox1">
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <article className="highBox2">
        {Dishes.map((dish) => (
          <div key={dish.id} className="highBoxDish">
            <img src={dish.img} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>{dish.price}$</p>
            <p>{dish.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Highlights;