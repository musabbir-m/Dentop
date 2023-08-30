import React from 'react'

const CarouselItem2 = () => {
  return (
    <div className=" h-[600px] bg-center lg:bg-top relative bg-cover bg-[url('https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=740&t=st=1693383578~exp=1693384178~hmac=776176f25421da1f3f9eb4172867fdfe0d26e077444d623f5a4ce9cd1acd6657')] pb-24 custom-div">
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

export default CarouselItem2