import React from 'react'
import { BsCart4 } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";

const Stats = () => {
  return (
    <div className='bg-gray-100 py-10 min-h-[500px]'>
     <div className=' py-10 px-4 mx-5 my-5 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6  max-w-96 bg-white shadow-md'>
        <div className='flex gap-4 '>
            <div>
                <div className='w-24 h-24 flex justify-center items-center border-4 rounded-full border-blue-300'><BsCart4 className='w-16 h-16 text-blue-600'/></div>
            </div>
            <div className='w-80'>
                <h2 className='text-6xl text-cyan-500'>10+</h2>
                <p className='text-blue-800 text-2xl'>Years of Experience</p>
                <p className='text-gray-500'> Incubate extensive scenarios without top-line quality vectors. Authoritatively engage </p>
            </div>
        </div>
        <div className='flex gap-4 '>
        <div className='w-24 h-24 flex justify-center items-center border-4 rounded-full border-blue-300'><FaUserDoctor className='w-16 h-16 text-blue-600'/></div>
            <div className='w-80'>
                <h2 className='text-6xl text-cyan-500'>30+</h2>
                <p className='text-blue-800 text-2xl'>Experienced Doctors</p>
                <p className='text-gray-500'> Incubate extensive scenarios without top-line quality vectors. Authoritatively engage </p>
            </div>
        </div>
        <div className='flex gap-4 '>
        <div className='w-24 h-24 flex justify-center items-center border-4 rounded-full border-blue-300'><FaPeopleGroup className='w-16 h-16 text-blue-600'/></div>
            <div className='w-80'>
                <h2 className='text-6xl text-cyan-500'>300+</h2>
                <p className='text-blue-800 text-2xl'>Happy Customers</p>
                <p className='text-gray-500'> Incubate extensive scenarios without top-line quality vectors. Authoritatively engage </p>
            </div>
        </div>

     </div>
    </div>
  )
}

export default Stats