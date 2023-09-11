import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";
import img4 from "../../../assets/images/img4.jpg";
import img5 from "../../../assets/images/img5.jpg";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const Testimonial = () => {
  const settings = {
    dots: true,

    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 3,

    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mx-auto py-5 lg:py-16">
      <div className="flex flex-col justify-center items-center py-10">
        <p className="text-cyan-400 text-lg font-semibold italic">Testimonial</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">Our Patients Say</h2>
        <p>We are happy to share some of our patients feedback. </p>
      </div>

      <div>
        <Slider
          className="flex justify-center  items-center  py-5 overflow-hidden"
          {...settings}
        >
          <div className="relative max-w-[400px] mx-4 py-5  px-4 h-60  bg-white rounded-3xl">
            <p className="h-24">
              Exceptional care and professionalism at Dentop! My family and I
              have found our dental home. Thank you for the great service
            </p>
            <p className="mr-24 border-b border-4 border-gray-200 mt-3"></p>
            <img
              src={img1}
              alt="people"
              className="w-16 rounded-full border-8 border-white hover:border-cyan-200 
                   transition ease-in-out duration-200 absolute right-3 top-24 "
            />
            <div className="flex justify-between mt-5">
              <div>
                <p className="text-blue-800 text-xl font-semibold">
                  Genith Polgar
                </p>
                <p className="text-cyan-500">Host, Genith Podcast</p>
              </div>
              <div className="mt-3 flex text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </div>
          </div>

          <div className="relative max-w-[400px] mx-4 py-5  px-4 h-60  bg-white rounded-3xl">
            <p className="h-24">
              Dentop's advanced technology and skilled dentists put me at ease.
              Pain-free procedures and a bright smile—what more could I ask for?
            </p>
            <p className="mr-24 border-b border-4 border-gray-200 mt-3"></p>
            <img
              src={img2}
              alt="people"
              className="w-16 rounded-full border-8 border-white hover:border-cyan-200 
                   transition ease-in-out duration-200 absolute right-3 top-24 "
            />
            <div className="flex justify-between mt-5">
              <div>
                <p className="text-blue-800 text-xl font-semibold">
                  Wagnar Ray
                </p>
                <p className="text-cyan-500">CEO, Dreamwaver</p>
              </div>
              <div className="mt-3 flex text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>

          <div className="relative max-w-[400px] mx-4 py-5  px-4 h-60  bg-white rounded-3xl">
            <p className="h-24">
              Dentop's attention to detail is impressive. I received
              personalized treatment that exceeded my expectations. Truly a
              top-notch dental clinic!
            </p>
            <p className="mr-24 border-b border-4 border-gray-200 mt-3"></p>
            <img
              src={img3}
              alt="people"
              className="w-16 rounded-full border-8 border-white hover:border-cyan-200 
                   transition ease-in-out duration-200 absolute right-3 top-24 "
            />
            <div className="flex justify-between mt-5">
              <div>
                <p className="text-blue-800 text-xl font-semibold">
                  Jon Smith
                </p>
                <p className="text-cyan-500">Web Developer, Outro</p>
              </div>
              <div className="mt-3 flex text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </div>
          </div>

          <div className="relative max-w-[400px] mx-4 py-5  px-4 h-60  bg-white rounded-3xl">
            <p className="h-24">
              Dentop transformed my smile! The team's expertise and friendly
              approach made my dental experience enjoyable. I highly recommend
              their services.
            </p>
            <p className="mr-24 border-b border-4 border-gray-200 mt-3"></p>
            <img
              src={img5}
              alt="people"
              className="w-16 rounded-full border-8 border-white hover:border-cyan-200 
                   transition ease-in-out duration-200 absolute right-3 top-24 "
            />
            <div className="flex justify-between mt-5">
              <div>
                <p className="text-blue-800 text-xl font-semibold">
                  Peter Parker
                </p>
                <p className="text-cyan-500">Hr, GeoTech Limited</p>
              </div>
              <div className="mt-3 flex text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
