import React from "react";
import Activities from "../Activities/Activities";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className=" min-h-screen   custom-div">
      <div className=" text-center flex pt-48 pl-10  ">
        <div className="max-w-md ">
          <h1 className="mb-5 text-3xl lg:text-6xl text-white  font-bold">Let Us Brighten Your Smile</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-cyan-400 border-none">Who We Are</button>
        </div>
        
      </div>
    </div>
  );
};

export default Carousel;
