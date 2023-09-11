import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({ treatmentName, selectedDate, id }) => {
  const { user } = useContext(AuthContext);
  const date = format(selectedDate, "PP");
  const [slots, setSlots] = useState([]);
  //fetching availale slots for a service
  // useEffect(()=>{
  //   fetch(`http://loacalhost:5000/service/${id}?date=${date}`)
  //   .then(res=>res.json())
  //   .then(data=> setSlots(data.slots))
  // },[])

  // const { name, slots, price } = treatmentName; //treatment is appointment options just different names

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log(slot);
    const booking = {
      appointmentDate: date,

      patientName,
      slot,
      email,
      phone,
    };
    console.log(booking);

    fetch("https://dentop-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setTreatment(null)

        if (data.acknowledged) {
          toast("Booking confirmed");

          //  refetch()
          //  setTreatment(null)
        } else {
          toast.error(data.message);
        }
      });
  };

  // if(slots.length===0){
  //   return <p>..Loading</p>
  // }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal max-w-sm lg:max-w-full">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-primary btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/* <h3 className="text-lg font-bold">{name}</h3> */}

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              defaultValue={date}
              disabled
              className="input mt-2 input-bordered w-full"
            />

            <select name="slot" className="select select-bordered w-full">
              {/* {slots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}{" "}
                  </option>
                ))} */}
            </select>

            <input
              type="text"
              name="name"
              placeholder={user?.displayName}
              defaultValue={user?.displayName}
              disabled
              className="input mt-2 input-bordered  w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input mt-2 input-bordered w-full"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              defaultValue={user?.email}
              className="input mt-2 input-bordered w-full"
            />

            <button className="btn btn-accent">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
