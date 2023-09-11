import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import AppointmentCard from "./AppointmentCard";
import ConsultationCard from "./ConsultationCard";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["appointment"],
    queryFn: () =>
      fetch(
        `https://dentop-server.vercel.app/myappointment?email=${user?.email}`
      ).then((res) => res.json()),
  });

  const {
    data: consultation,
    isLoading: isConsultationLoading,
    refetch: refetchConsultationData,
  } = useQuery({
    queryKey: ["consultation"],
    queryFn: () =>
      fetch(
        `https://dentop-server.vercel.app/myconsultation?email=${user?.email}`
      ).then((res) => res.json()),
  });

  console.log(consultation, "consul");

  if (isLoading) {
    return (
      <p
        className="w-8 h-8 border-4 border-blue-500 border-dashed  rounded-full animate-spin 
      flex justify-center items-center"
      ></p>
    );
  }
  return (
    <div className="min-h-screen py-16">
      <h2 className="text-center text-4xl text-blue-800 font-semibold mb-10">
        Treatment Appointments
      </h2>
      <div className="grid grid-cols-1 gap-3">
        {data.map((d) => (
          <AppointmentCard data={d} key={d._id} />
        ))}
      </div>
      <h2 className="text-center text-4xl text-blue-800 font-semibold mt-20 mb-10">
        Consultation Appointment
      </h2>
      <div className="w-full py-5 px-5 flex flex-wrap gap-3 items-center justify-center">
        {consultation?.map((c) => (
          <ConsultationCard data={c} />
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
