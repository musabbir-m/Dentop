import React from "react";

const AppointmentCard = ({ data }) => {
  const { treatment, appointmentdate, img, selectedSlot, price } = data;
  return (
    <div className="mx-auto max-w-2xl flex flex-col lg:flex-row bg-white shadow-md shadow-white justify-center items-cente">
      <div className="w-96 mx-auto p-2">
        <img className="w-full rounded-lg" src={img} alt="service" />
      </div>
      <div className=" px-5 py-4 mx-auto">
        <h3 className="text-xl font-semibold text-cyan-500 py-3">{treatment}</h3>
         <p> Date: <span className="text-blue-500">{appointmentdate}</span></p>
         <p>Time:<span className="text-blue-500">{selectedSlot}</span></p>
         <p>Service Charge: <span className="text-blue-500">{price}</span></p>

         <p className="w-40 p-2 mt-5 bg-teal-500 text-white">For any query call: +880234267</p>
      </div>
    </div>
  );
};

export default AppointmentCard;
