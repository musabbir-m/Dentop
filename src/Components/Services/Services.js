import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import {BsArrowRightCircle} from "react-icons/bs"
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="text-center mb-48">
      <h3 className="text-2xl text-cyan-400">Our Services</h3>
      <h2 className="text-5xl">
        Providing Medical Care For <br /> The Sickest In Our Community.
      </h2>

      

      <div className="grid grid-cols-3 gap-3 mb-16">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <Link to="/allservices"><button className=" text-xl text-white mt-28 bg-cyan-500 px-10 py-3 ">See All <BsArrowRightCircle className="inline"></BsArrowRightCircle> </button></Link>
    </div>
  );
};

export default Services;
