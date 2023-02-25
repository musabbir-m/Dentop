import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const ServiceCard = ({ service }) => {
  const { img, name, description } = service;
  return (
    <div className="relative p-6 shadow-sm mx-auto max-w-sm mb-36">
      <div className="">
        <img
          className="w-72 h-auto mx-auto rounded-lg hover:scale-110 ease-in duration-200"
          src={img}
          alt=""
        />
      </div>
      <div className="w-64 h-40 bg-white rounded-md   absolute top-48 right-10 shadow-lg px-3 py-4">
        <h3 className="text-xl font-semibold mb-3">{name} </h3>
        <p>{description.slice(0, 50)}..</p>
        
          <button className="border-[1px] border-cyan-300 hover:bg-cyan-400 hover:text-white px-16 py-2 ease-in duration-200">
          See Details <BsArrowRightShort className="inline"></BsArrowRightShort>{" "}
          </button>
        
      </div>
    </div>
  );
};

export default ServiceCard;
