import React from "react";
import {Dishes} from "./Dishes.js";
import Slider from "react-slick";

function Highlights(){
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
  return (
    <section className="contenedorPrincipal">
      <div className="highBox1">
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <article className="slider-container highBox2">
        <Slider {...settings}>
          {Dishes.map((dish) => (
            <div key={dish.id} className="highBoxDish">
              <img src={dish.img} loading="lazy" alt={dish.name} />
                <div className="highBoxDishInfo">
                 <div className="highBoxDishTitle">
                  <h3>{dish.name}</h3>
                  <p>{dish.price}$</p>
                 </div>
                  <p>{dish.description}</p>
                  <div className="highBoxDishOrder">
                    <p>Order a delivery</p>
                    <img src="/Icons_assets/moped.svg" alt="moped delivery"></img>
                  </div>
                </div>
            </div>
            ))}
        </Slider>
      </article>
    </section>
  );
}

export default Highlights;