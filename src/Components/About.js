import React from "react";

function About(){
  return (
    <div className="contenedorPrincipal boxAboutMain">
      <section className="boxAbout1">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
      Mario and Adrian are the passionate entrepreneurs behind a Mediterranean restaurant that blends traditional flavors with a contemporary flair. From the very beginning, they’ve been dedicated to offering their guests a unique dining experience that honors the authenticity of classic Mediterranean cuisine, while infusing it with modern techniques that highlight fresh ingredients and culinary creativity.
      </p>
      <p>
      With deep respect for time-honored recipes passed down through generations, Mario and Adrian have crafted a menu that not only celebrates Mediterranean traditions but also reinvents them. Their success lies in their love for cooking, their commitment to quality, and their ability to innovate without losing touch with the rich culinary heritage of the region.
      </p>
      </section>
      <section className="boxAbout2">
    <img className="boxAbout2Img1" src="/Icons_assets/Mario-and-Adrian-b.webp" />
    <img className="boxAbout2Img2" src="/Icons_assets/Mario-and-Adrian-A.webp" />
      </section>
    </div>
  );
}

export default About;