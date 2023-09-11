import React from 'react'

const ConsultationCard = ({data}) => {
  return (
    <div className='w-96 h-32 bg-white shadow-lg rounded-md py-4 px-3'>
        <p>Date: <span className='text-blue-500 px-3'>{data.date}</span></p>
        <p>Time: <span className='text-blue-500 px-3'>{data.slot}</span></p>
        <p>Phone: <span className='text-blue-500 px-3'>{data.phone}</span></p>
    </div>
  )
}

export default ConsultationCard