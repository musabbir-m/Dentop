import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import {BsArrowRightCircle} from "react-icons/bs"
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://dentop-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="text-center mb-40">
      <h3 className="text-3xl font-bold text-white">Our Services</h3>
      <h2 className="pb-8 text-3xl md:text-4xl font-semibold text-blue-800">
        Providing Dental Care For <br /> The Sickest In Our Community.
      </h2>

      

      {
        services.length===0? <div className="w-10 h-10 rounded-full border-blue-800 my-4 border-t-4 border-dashed animate-spin mx-auto"></div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {
        services?.map((service) => (
          <ServiceCard key={service._id}  service={service}></ServiceCard>
        ))
        
        }
      </div>
      }
      <Link to="/allservices"><button className=" text-xl text-white  bg-cyan-500 px-10 py-3 hover:bg-blue-800 transition-all duration-200">See All <BsArrowRightCircle className="inline"></BsArrowRightCircle> </button></Link>
    </div>
  );
};

export default Services;
