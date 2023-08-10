import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard";
import { AiOutlineSolution } from "react-icons/ai";

const Allservices = () => {
  const allservices = useLoaderData();
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/XJX84jp/all-Service.jpg')] bg-cover h-96  bg-no-repeat  ">

        <h2 className="pl-20 pt-36 text-2xl font-bold">
        <AiOutlineSolution className="inline"></AiOutlineSolution> Services 
        </h2>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allservices.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Allservices;
