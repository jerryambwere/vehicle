import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay"; // Import the autoplay CSS
import "./Home.css"; // Import the CSS file

import image1 from "/public/image1.jpg";
import image2 from "/public/image2.jpg";
import image3 from "/public/image3.jpg";
import image4 from "/public/image4.jpg";
import image5 from "/public/image5.jpg";

const slides = [
  {
    title: "1 Series",
    image: image1,
  },
  {
    title: "2 Series",
    image: image2,
  },
  {
    title: "3 Series",
    image: image3,
  },
  {
    title: "4 Series",
    image: image4,
  },
  {
    title: "5 Series",
    image: image5,
  },
];

const Home = () => {
  return (
    <section className="home-page">
      <h1 className="home-title">Welcome to Our Car Collection</h1>
      <Swiper
        grabCursor
        centeredSlides
        slidesPerView={1.5} // Adjust slides per view
        effect="coverflow"
        loop
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // Time in ms between slides
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200, // Increase depth for larger effect
          modifier: 3,
          slideShadows: true,
        }}
        speed={600} // Transition speed in ms
        modules={[Pagination, EffectCoverflow, Autoplay]}
        className="carousel"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.title}
            className="swiper-slide" // Add a class for styling
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="slide-content">
              <h2 className="slide-title">{slide.title}</h2>
              <a href="#" className="explore-link">Explore</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Home;
