import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import AppointmentCard from "./AppointmentCard";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["appointment"],
    queryFn: () =>
      fetch(`http://localhost:5000/myappointment?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });

  console.log(data)

  if (isLoading) {
    return <h2>Loading</h2>;
  }
  return (
    <div className="min-h-screen py-16">
      <h2 className="text-center text-4xl text-blue-800 font-semibold mb-10">Treatment Appointments</h2>
       <div className="grid grid-cols-1 gap-3">
          {
            data.map(d=>(
              <AppointmentCard
              data={d}
              key={d._id}
              />
            ))
          }
        
        </div>         
 
    </div>
  );
};

export default MyAppointment;
