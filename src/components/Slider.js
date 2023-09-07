import React from "react";
import './Slider.css';
function Slider(){
    return(
        <>
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://media.licdn.com/dms/image/D5612AQFnY506s0lVlA/article-cover_image-shrink_600_2000/0/1660523886268?e=2147483647&v=beta&t=6COoLa8lubKoAyjj2jh6Hu1QQSq--e_jnJ5z0nneVz4" className="d-block w-100 height-500" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://cdn1.expresscomputer.in/wp-content/uploads/2023/01/04165947/EC_Retail_ECommerce_750.jpg" className="d-block w-100 height-500" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/ecommerce.png" className="d-block w-100 height-500" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    );
}

export default Slider;