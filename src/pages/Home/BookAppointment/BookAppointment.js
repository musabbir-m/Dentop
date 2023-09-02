import React, { useEffect, useState } from 'react'
import { MdAddIcCall } from "react-icons/md";
import { TfiCheck } from "react-icons/tfi";


const BookAppointment = () => {
const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://dentop-server.vercel.app/allservices")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  const handleSubmit= ()=> {

  }

  return (
    <div className='flex bg-gray-100 flex-col py-10 lg:flex-row'>
        
        <div className='lg:w-2/4 px-6 pt-6 lg:pt-28 '>
            <p className='text-cyan-400 text-xl italic'>Dental Care and Guidlines for You</p>
            <h2 className='text-2xl lg:text-4xl font-semibold my-4'>We Are Here To Support You</h2>
            <p className='text-gray-500'>Proactively revolutionize granular customer service after pandemic internal or "organic" sources. 
                Distinctively impact proactive human capital rather than client-centered benefits.
            </p>

            <div className='py-5 grid grid-cols-1 md:grid-cols-2'>
                <div className='flex gap-3 items-center'>
                    <TfiCheck className='text-cyan-500 w-4 h-4 bg-white rounded-full font-semibold'/> 
                    <p >High Success Rate</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <TfiCheck className='text-cyan-500 w-4 h-4 bg-white rounded-full font-semibold'/> 
                    <p >Free Consultation</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <TfiCheck className='text-cyan-500 w-4 h-4 bg-white rounded-full font-semibold'/> 
                    <p >Large number of Experts</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <TfiCheck className='text-cyan-500 w-4 h-4 bg-white rounded-full font-semibold'/> 
                    <p >Affordable Cost</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <TfiCheck className='text-cyan-500 w-4 h-4 bg-white rounded-full font-semibold'/> 
                    <p >Experienced professionals</p>
                </div>
            </div>

            <button className='px-4 py-2 bg-blue-800 hover:bg-cyan-500 transition-all duration-150 rounded-full text-white'>Get More Info</button>
        </div>

        <div className='lg:w-2/4 shadow-lg shadow-gray-300'>
            <div className='bg-blue-900  py-10 flex items-center justify-around'>
                <div className='text-white'><h2 className='text-3xl'>Book an appointment</h2>
                <p>Please call us to ensure</p>
                <p>Tel: +99090945</p>
                </div>
                
                <div className='w-16 h-16 bg-cyan-400 flex justify-center items-center rounded-full'>
                <MdAddIcCall className='text-4xl text-white'/>
                </div>

            </div>
            <div className='bg-white px-10 py-5'>
              <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3'>
                <select className='w-60 py-3 rounded-full  border-2 border-gray-200'>
                    {
                        services.map((service=>(
                            <option>{service.name}</option>
                        )))
                    }
                  </select>
                  <select className='w-60 py-3 rounded-full  border-2 border-gray-200'>
                     <option>Farhan Hasan</option>
                     <option> John Smith</option>
                     <option>David Lamot</option>
                     <opiton>Iqbal Faruque</opiton>
                  </select>
                  <input required className='w-60 py-3 rounded-full  border-2 border-gray-200' placeholder='Your Name'/>
                  <input required className='w-60 py-3 rounded-full  border-2 border-gray-200' placeholder='Your Email'/>
                  <input required className='w-60 py-3 rounded-full  border-2 border-gray-200' type='numeric' placeholder='Your Phone'/>
                  <input required className='w-60 py-3 rounded-full  border-2 border-gray-200' type='date'></input>
                  <input required className='w-60 py-3 rounded-full  border-2 border-gray-200' type='time' placeholder='time'></input>    
                </div>  
                
                <button className='px-2 py-3 bg-blue-800 hover:bg-cyan-500 transition-all duration-150 w-40 text-white rounded-full mt-3'>Make appointment</button>
                
              </form>
            </div>
        </div>
    </div>
  )
}

export default BookAppointment