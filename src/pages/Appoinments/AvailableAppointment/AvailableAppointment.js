import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../../../Component/BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const date = format(selectedDate, "pp");
  const [treatmentName, setTreatmentName] = useState(null);

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date], //data is state parameter
    queryFn: async () => {
      const res = await fetch(
        `https://dentop-server.vercel.app/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <p>loading..</p>;
  }
  return (
    <section>
      <p className="text-xl text-bold text-center text-primary">
        You have selected: {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatmentName}
          ></AppointmentOption>
        ))}
      </div>
      {treatmentName && (
        <BookingModal
          treatmentName={treatmentName}
          selectedDate={selectedDate}
          setTreatment={setTreatmentName}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
