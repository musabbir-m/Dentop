import React from 'react'
import CountUp, { useCountUp } from 'react-countup';
import { BsCart4 } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";

const Stats = () => {

    useCountUp({
        ref: 'counter',
        start:2,
        end: 10,
        enableScrollSpy: true,
        scrollSpyDelay: 100,
      });

    useCountUp({
        ref: 'counter2',
        start:90,
        end: 100,
        enableScrollSpy: true,
        scrollSpyDelay: 500,
    })

    useCountUp({
        ref: 'counter3',
        start:950,
        end: 1000,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    })


  return (
    <div className='bg-gray-100 py-10 min-h-[500px]'>
     <div className=' py-10 px-4 mx-5 my-5 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6  max-w-96 bg-white shadow-md'>
        <div className='flex gap-4 '>
            <div>
                <div className='w-24 h-24 flex justify-center items-center border-4 rounded-full border-blue-300'><BsCart4 className='w-16 h-16 text-blue-600'/></div>
            </div>
            <div className='w-80'>
                <h2 className='text-6xl text-cyan-500'> <span id="counter" /> +</h2>
                
                <p className='text-blue-800 text-2xl'>Years of Experience</p>
                <p className='text-gray-500'> Incubate extensive scenarios without top-line quality vectors. Authoritatively engage </p>
            </div>
        </div>
        <div className='flex gap-4 '>
        <div className='w-24 h-24 flex justify-center items-center border-4 rounded-full border-blue-300'><FaUserDoctor className='w-16 h-16 text-blue-600'/></div>
            <div className='w-80'>
                
                <h2 className='text-6xl text-cyan-500'>
                <span id='counter2'/> +
                </h2>
                <p className='text-blue-800 text-2xl'>Experienced Doctors</p>
                <p className='text-gray-500'> Incubate extensive scenarios without top-line quality vectors. Authoritatively engage </p>
            </div>
        </div>
        <div className='flex gap-4 '>
        <div className='w-24 h-24 flex justify-center items-center border-4 rounded-full border-blue-300'><FaPeopleGroup className='w-16 h-16 text-blue-600'/></div>
            <div className='w-80'>
                <h2 className='text-6xl text-cyan-500'><span id='counter3'/>+</h2>
                <p className='text-blue-800 text-2xl'>Happy Clients</p>
                <p className='text-gray-500'> Incubate extensive scenarios without top-line quality vectors. Authoritatively engage </p>
            </div>
        </div>

     </div>
    </div>
  )
}

export default Stats