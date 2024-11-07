import React from "react";
import Slider from "react-slick";
import {Customers} from "./customers.js";

function starRating(customer) {
  let rating;

  if (customer.rating === 1) {
    rating = '★☆☆☆☆';
  } else if (customer.rating === 2) {
    rating = '★★☆☆☆';
  } else if (customer.rating === 3) {
    rating = '★★★☆☆';
  } else if (customer.rating === 4) {
    rating = '★★★★☆';
  } else if (customer.rating === 5) {
    rating = '★★★★★';
  } else {
    rating = 'No rating';
  }

  return rating;
}

function Testimonials(){
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 200,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <article className="testimonials">
      <div className="contenedorPrincipal">
        <h2>Testimonials</h2>
        <section className="slider-container">
        <Slider {...settings}>
          {Customers.map((customers) => (
            <div key={customers.id} className="BoxTestimonial">
              <div>
                <span>{starRating(customers)}</span>
                <div className="BoxTestimonialCustomer">
                  <img src={customers.img} loading="lazy" alt={customers.name} />
                  <p>{customers.name}</p>
                </div>
                <p>"{customers.review}"</p>
              </div>
            </div>
            ))}
          </Slider>
        </section>
      </div>
    </article>
  );
}

export default Testimonials;