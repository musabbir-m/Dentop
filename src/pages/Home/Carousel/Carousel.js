import React from "react";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem2 from "./CarouselItem2";

const Carousel = () => {
  const settings = {
    dots: false,
    fade:true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 1,

    autoplay: true,
    autoplaySpeed: 2100,
    pauseOnHover: false,

    prevArrow:null,
    nextArrow:null,
   

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (    
    <div className="w-full">
      <Slider {...settings} className="overflow-hidden">
        <CarouselItem/>
        <CarouselItem2/>
      </Slider>
    </div>
      
  );
};

export default Carousel;
