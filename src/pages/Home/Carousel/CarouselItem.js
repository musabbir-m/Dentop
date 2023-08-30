import React from 'react'

const CarouselItem = () => {
  return (
    <div className="pb-24 custom-div h-[600px] bg-center lg:bg-top bg-cover relative bg-[url('https://img.freepik.com/premium-photo/young-female-patient-with-open-mouth-examining-dental-inspection-dentist-office_358354-10484.jpg?w=740')] ">
      <div className=" overlay text-center  pt-48 md:pl-10  ">
        <div className="max-w-md ">
          <h1 className="mb-5 text-3xl lg:text-5xl text-blue-600 italic  font-bold">Let's Brighten Your Smile</h1>
          <p className="mb-5 font-semibold text-xl text-gray-100">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* <button className="btn bg-cyan-400 border-none">Who We Are</button> */}
        </div>
        
      </div>
    </div>
  )
}

export default CarouselItem