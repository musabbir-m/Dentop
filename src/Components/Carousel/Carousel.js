import React from "react";

const Carousel = () => {
  return (
    <div className="">
      <div className=" min-h-screen hero custom-div" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/woman-patient-dentist_1303-9355.jpg?w=740&t=st=1677207370~exp=1677207970~hmac=6944c650922ea7d29d0ec1f1b532e1208239c6c87c10759595eada98926093f8")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center  text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Let's Brighten Your Smile</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn bg-cyan-400 border-none">Who We Are</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Carousel;
