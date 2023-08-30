import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className=" h-[500px] bg-[url('https://i.ibb.co/XJX84jp/all-Service.jpg')] pb-24 custom-div">
      <div className=" overlay text-center  pt-48 md:pl-10  ">
        <div className="max-w-md ">
          <h1 className="mb-5 text-3xl lg:text-5xl text-blue-600 italic  font-bold">Let's Brighten Your Smile</h1>
          <p className="mb-5 font-semibold text-xl text-gray-100">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* <button className="btn bg-cyan-400 border-none">Who We Are</button> */}
        </div>
        
      </div>
    </div>
  );
};

export default Carousel;
