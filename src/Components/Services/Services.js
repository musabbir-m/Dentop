import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

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
    <div className="text-center">
      <h3 className="text-2xl text-cyan-400">Our Services</h3>
      <h2 className="text-5xl">
        Providing Medical Care For <br /> The Sickest In Our Community.
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <button className="bg-cyan-400 px-10 py-3">See all</button>
    </div>
  );
};

export default Services;
