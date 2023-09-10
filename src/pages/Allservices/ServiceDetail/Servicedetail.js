import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import {
  Link,
  Navigate,
  json,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import ReviewCard from "../ReviewCard/ReviewCard";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import BookingModal from "../../../Component/BookingModal/BookingModal";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const Servicedetail = () => {
  const { user } = useContext(AuthContext);
  console.log(user, "user");
  const service = useLoaderData();
  const { name, img, description, _id, price, slot } = service;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const date = format(selectedDate, "PP");
  console.log(date, "date");

  const [loading, setLoading] = useState(false);
  const [serviceLoading, setServiceLoading] = useState(true);

  const [acknowledged, setAcknowledged] = useState(false);
  const [reviews, setReviews] = useState("");
  console.log(reviews);

  //laoding spinner state for service loading

  useEffect(() => {
    if (service) {
      setServiceLoading(false);
    }
  }, [service]);

  //post booking
  const postBooking = (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const patientName = form.name.value;

    const email = form.email.value;
    const phone = form.phone.value;

    const selectedSlot = form.slot.value;

    const serviceId = _id;
    const treatment = name;
    

    const bookingObject = {
      patientName,
      email,
      phone,
      appointmentdate: date,
      selectedSlot,
      serviceId,
      treatment,
      img,
      price
    };

    fetch("http://localhost:5000/appointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingObject),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("Successfully Booked");
          setLoading(false);
        } else {
          toast.error(data.message);
          setLoading(false);
        }
      });
  };

  //load review

  useEffect(() => {
    fetch(`https://dentop-server.vercel.app/reviews?name=${name}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [acknowledged]);

  console.log(service);

  //add review method

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email;
    const photoURL = user?.photoURL;
    const reviewText = form.review.value;

    const reviewObject = {
      service: _id,
      serviceName: name,
      customer: user?.displayName,
      email,
      reviewText,
      photoURL,
    };

    fetch(
      "http://localhost:5000/review",

      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reviewObject),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("review added succesfully");
          setAcknowledged(true);
          event.target.reset();
          //   reload review when a new review added
          fetch(`https://dentop-server.vercel.app/reviews?name=${name}`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  if (serviceLoading) {
    return (
      <div className="w-10 h-10 border-t-4 rounded-full mx-auto  border-blue-800 border-dashed animate-spin"></div>
    );
  }
  return (
    <div className="">
      {/* service details */}
      <div className=" px-4 py-6 bg-base-100 shadow-xl">
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-96 lg:w-2/4">
            <img className="w-full rounded-lg" src={img} alt="Album" />
          </div>

          <div className=" px-6">
            <h2 className=" text-emerald-400 text-2xl font-semibold 	">
              {name}
            </h2>
            <p>{description}</p>

            <p className="font-bold bg-gray-200 w-32 px-3 mt-5">
              <span className="text-purple-600">Price:</span> $ {price}
            </p>
          </div>
        </div>

        {/* show all review  */}

        {/* Appointment Field */}

        <div className="py-6 mt-8 flex flex-col lg:flex-row items-center justify-center">
          <div>
            <p className="text-center text-blue-800 text-xl font-semibold">
              Select Date for Appointment
            </p>
            <DayPicker
              className="mt-5"
              selected={selectedDate}
              onSelect={setSelectedDate}
              mode="single"
            />

            <p className="text-center text-cyan-500 text-lg font-semibold">
              Selected Date {date}
            </p>
          </div>

          <div className="bg-white px-10 py-5">
            <form
              className="flex flex-col justify-center items-center"
              onSubmit={postBooking}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3">
                <div className="flex flex-col justify-center items-center">
                  <label htmlFor="slot">Slot</label>
                  <select
                    id="slot"
                    name="slot"
                    className="w-60 py-3 rounded-full  border-2 border-gray-200"
                    required
                  >
                    {slot.map((s) => (
                      <option>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <label htmlFor="slot">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-60 py-3 rounded-full  border-2 border-gray-200"
                    placeholder="Your Name"
                    value={user?.displayName}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    required
                    className="w-60 py-3 rounded-full  border-2 border-gray-200"
                    placeholder="Your Email"
                    value={user?.email}
                  />
                </div>

                <div className="flex flex-col items-center justify-center">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    className="w-60 py-3 rounded-full  border-2 border-gray-200"
                    type="numeric"
                    placeholder="Your Phone"
                  />
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                className=" h-10 w-40  bg-blue-800 hover:bg-cyan-500 transition-all duration-150  text-white rounded-full mt-3 flex justify-center  items-center gap-x-2"
              >
                {loading && (
                  <p className="w-8 h-8 border-t-4 border-blue-500 border-dashed  rounded-full animate-spin"></p>
                )}
                Book
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10">
          {reviews ? (
            <div>
              <h2 className=" border-t-2 border-gray-500 text-2xl font-semibold uppercase text-cyan-500 text-center">
                Reviews
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {reviews?.map((review) => (
                  <ReviewCard key={review._id} review={review}></ReviewCard>
                ))}
              </div>
            </div>
          ) : (
            <h2 className="text-2xl font-semibold mx-auto">No reviews Yet</h2>
          )}

          {/* add review */}
          {user?.uid ? (
            <>
              <div className="mt-16 mb-5">
                <h2 className="text-3xl text-center">Add your review</h2>
                {/* form to add review */}
                <form action="" onSubmit={handleAddReview}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-3 mt-5">
                    {/* <input
                      type="text"
                      name="email"
                      placeholder="Your Email"
                      className="input input-info w-full input-bordered"
                      defaultValue={user.email}
                    />
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input input-info w-full input-bordered  "
                      defaultValue={user?.displayName}
                    /> */}
                    {/* <input
                      type="text"
                      name="photourl"
                      placeholder="photo url"
                      className="input input-info w-full input-bordered  "
                      defaultValue={user?.photoURL}
                    /> */}
                  </div>

                  <input
                    name="review"
                    className=" mt-5 textarea textarea-info h-20 w-full"
                    placeholder="Write review"
                  ></input>
                  <input
                    className="cursor-pointer bg-cyan-400 hover:bg-blue-800 transition duration-200 px-4 py-3 text-white font-semibold text-xl border-none flex justify-center content-center mt-5 mx-auto"
                    type="submit"
                    value="Submit review"
                  />
                </form>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl text-center my-6 mx-auto hover:text-orange-400">
                <Link to="/login">Login to add review </Link>
              </h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Servicedetail;
