import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';

const Allservices = () => {
    const allservices= useLoaderData()
    return (
        <div>
            <h2>All service appears hrere with modern cards and small  hero section</h2>

            <div className='relative grid grid-cols-3'>
            {
                allservices.map(service=> <ServiceCard key={service._id} service= {service} ></ServiceCard>)
            }
            </div>
           
        </div>
    );
};

export default Allservices;