import React, { useEffect, useState } from "react";
import { MdAddIcCall } from "react-icons/md";
import { TfiCheck } from "react-icons/tfi";
import { format, parse } from "date-fns";
import toast from "react-hot-toast";
import { json } from "react-router-dom";

const BookAppointment = () => {
  const [services, setServices] = useState([]);
  const [appointmentLoading, setAppointmentLoading] = useState(false);
  const slots = [
    "09:00 AM - 09:15 AM",
    "09:15 AM - 09:30 AM",
    "09:30 AM - 09:45 AM",
    "09:45 AM - 10:00 AM",
    "10:00 AM - 10:15 AM",
    "10:15 AM - 10:30 AM",
    "10:30 AM - 10:45 AM",
    "10:45 AM - 11:00 AM",
    "11:00 AM - 11:15 AM",
    "11:15 AM - 11:30 AM",
    "11:30 AM - 11:45 AM",
    "11:45 AM - 12:00 PM",
    "01:00 PM - 01:15 PM",
    "01:15 PM - 01:30 PM",
    "01:30 PM - 01:45 PM",
    "01:45 PM - 02:00 PM",
    "02:00 PM - 02:15 PM",
    "02:15 PM - 02:30 PM",
    "02:30 PM - 02:45 PM",
    "02:45 PM - 03:00 PM",
    "03:00 PM - 03:15 PM",
    "03:15 PM - 03:30 PM",
    "03:30 PM - 03:45 PM",
    "03:45 PM - 04:00 PM",
    "04:00 PM - 04:15 PM",
    "04:15 PM - 04:30 PM",
    "04:30 PM - 04:45 PM",
    "04:45 PM - 05:00 PM",
  ];

  useEffect(() => {
    fetch("https://dentop-server.vercel.app/allservices")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  const handleSubmit = (event) => {
    setAppointmentLoading(true);
    event.preventDefault();
    const form = event.target;
    const parsedDate = parse(form.date.value, "y-MM-dd", new Date());
    const formattedDate = format(parsedDate, "MM/dd/yyyy");
    const name = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone= form.phone.value

    const appointment = {
      date: formattedDate,
      name,
      email,
      slot,
      phone
    };
    fetch("http://localhost:5000/consultation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("appointment booked successfully");
          setAppointmentLoading(false)
        } else {
          toast.error(data.message);
          setAppointmentLoading(false)
        }
      });
    ;
  };

  return (
    <div className="flex bg-gray-100 flex-col pt-10 pb-20  lg:flex-row">
      <div className="lg:w-2/4 px-6 py-5 pt-6 lg:pt-28 ">
        <p className="text-cyan-400 text-xl font-semibold italic">
          Dental Care and Guidlines for You
        </p>
        <h2 className="text-2xl lg:text-4xl font-semibold my-4">
          We Are Here To Support You
        </h2>
        <p className="text-gray-500">
          Proactively revolutionize granular customer service after pandemic
          internal or "organic" sources. Distinctively impact proactive human
          capital rather than client-centered benefits.
        </p>

        <div className="py-5 grid grid-cols-1 md:grid-cols-2">
          <div className="flex gap-3 items-center">
            <TfiCheck className="text-cyan-500 w-4 h-4 bg-white rounded-full font-semibold" />
            <p>High Success Rate</p>
          </div>
          <div className="flex gap-3 items-center">
            <TfiCheck className="text-cyan-500 w-4 h-4 bg-white rounded-full font-semibold" />
            <p>Free Consultation</p>
          </div>
          <div className="flex gap-3 items-center">
            <TfiCheck className="text-cyan-500 w-4 h-4 bg-white rounded-full font-semibold" />
            <p>Large number of Experts</p>
          </div>
          <div className="flex gap-3 items-center">
            <TfiCheck className="text-cyan-500 w-4 h-4 bg-white rounded-full font-semibold" />
            <p>Affordable Cost</p>
          </div>
          <div className="flex gap-3 items-center">
            <TfiCheck className="text-cyan-500 w-4 h-4 bg-white rounded-full font-semibold" />
            <p>Experienced professionals</p>
          </div>
        </div>

        {/* <button className="px-4 py-2 bg-blue-800 hover:bg-cyan-500 transition-all duration-150 rounded-full text-white">
          Get More Info
        </button> */}
      </div>

      <div className="lg:w-2/4 shadow-lg shadow-gray-300">
        <div className="bg-blue-900  py-10 flex items-center justify-around">
          <div className="text-white">
            <h2 className="text-3xl">Book 15 min free consultation</h2>
            <p>Please call us to ensure</p>
            <p>Tel: +99090945</p>
          </div>

          <div className="w-16 h-16 bg-cyan-400 flex justify-center items-center rounded-full">
            <MdAddIcCall className="text-4xl text-white" />
          </div>
        </div>
        <div className="bg-white px-10 py-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3">
              {/* <select
                name="doctor"
                className="w-60 py-3 rounded-full  border-2 border-gray-200"
              >
                <option>Farhan Hasan</option>
                <option> John Smith</option>
                <option>David Lamot</option>
                <option>Iqbal Faruque</option>
              </select> */}
              <input
                required
                className="w-60 py-3 rounded-full  border-2 border-gray-200"
                name="name"
                id="name"
                placeholder="Your Name"
              />
              <input
                required
                className="w-60 py-3 rounded-full  border-2 border-gray-200"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <input
                required
                className="w-60 py-3 rounded-full  border-2 border-gray-200"
                name="phone"
                type="tel"
                placeholder="Your Phone"
              />
              <input
                required
                className="w-60 py-3 rounded-full  border-2 border-gray-200"
                name="date"
                type="date"
              ></input>
              <select
                name="slot"
                className="w-60 py-3 rounded-full  border-2 border-gray-200"
              >
                {slots.map((s) => (
                  <option>{s}</option>
                ))}
              </select>
            </div>

            <button
              disabled={appointmentLoading}
              type="submit"
              className="px-2 py-3 bg-blue-800 hover:bg-cyan-500 transition-all duration-150 w-56 text-white rounded-full mt-3 flex justify-center"
            >
              {appointmentLoading && (
                <p className="w-8 h-8 border-4 border-blue-500 border-dashed  rounded-full animate-spin"></p>
              )}{" "}
              Make appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
