import React from "react";

const ServiceCard = ({ service }) => {
  const { img, name, description } = service;
  return (
    <div className="relative p-6 shadow-sm mx-auto max-w-sm ">
      <div className="w-72  ">
        <img className="h-auto mx-auto rounded-lg hover:scale-110 ease-in duration-200" src={img} alt="" />
      </div>
      <div className="w-64 h-40 bg-white rounded-md  -mt-5 absolute top-54 right-10 shadow-lg px-3 py-4">
        <h3 className="text-xl font-semibold mb-3">{name} </h3>
        <p>{description.slice(0,50)}..</p>
        <button className="border-[1px] border-cyan-300 hover:bg-cyan-400 px-16 py-2 ease-in duration-200">More</button>
      </div>
    </div>
  );
};

export default ServiceCard;
