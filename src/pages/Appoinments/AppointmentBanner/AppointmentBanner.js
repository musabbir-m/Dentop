import React, { useState } from 'react'
import { DayPicker } from "react-day-picker";
import format from "date-fns/format";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
  return (
    <header className="my-6 ">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt="dentist"
            src="https://img.freepik.com/free-photo/dentist-with-smile_144627-886.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className=" w-96">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
         
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppointmentBanner