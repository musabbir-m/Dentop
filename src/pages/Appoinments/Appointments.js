import React, { useState } from 'react'
import AppointmentBanner from './AppointmentBanner/AppointmentBanner'
import AvailableAppointment from './AvailableAppointment/AvailableAppointment'

const Appointments = () => {
    const [selectedDate, setSelectedDate]= useState(new Date())
    console.log(selectedDate)
  return (
    <div>
    <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
    <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
    </div>
  )
}

export default Appointments