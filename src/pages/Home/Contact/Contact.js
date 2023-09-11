import React from "react";
import "./Contact.css";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="parallax h-96 ">
      <div className="contact py-10 px-5">
        <div className="flex justify-center items-center flex-col py-5">
          <h2 className="text-white text-4xl font-semibold text-center pt-5 pb-2">
            CONTACT US
          </h2>
          <p className="w-40 h-4 border-t-4 border-blue-700 "></p>
        </div>
        <p className="flex items-center justify-center text-white text-3xl">
          <BsTelephone /> +8802134654{" "}
        </p>
        <p className="text-white text-3xl font-semibold text-center py-3 mt-3">
          Please feel free to contact us for any query
        </p>
        <p className="text-xl text-white font-semibold text-center">
          Contact us today for a healthy smile! Our friendly team is here to
          assist with appointments, inquiries, and any dental concerns. <br />{" "}
          Reach out for personalized care and expert advice. Your perfect smile
          starts with us!
        </p>
      </div>
    </div>
  );
};

export default Contact;
