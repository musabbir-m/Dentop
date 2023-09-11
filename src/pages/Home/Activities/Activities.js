import React from "react";
import { RiRemoteControl2Fill } from "react-icons/ri";
import { TbHeartHandshake } from "react-icons/tb";

const Activities = () => {
  return (
    <div className="py-6 mx-0 lg:mx-10 mb-24 flex flex-col lg:flex-row justify-center items-center lg:justify-around  bg-slate-100  shadow-md rounded-md ">
      <div className=" overflow-hidden w-2/4   ">
        <img
          className=" w-full"
          height=""
          src="https://i.ibb.co/CvZgB5t/dentist.jpg"
          alt=""
        />
      </div>

      <div className="pt-10 px-5 mx-2">
        <h3 className="text-xl font-semibold text-cyan-400">WHAT WE DO</h3>
        <h2 className="text-3xl md:text-4xl text-blue-800 font-semibold mt-5">
          True Healthcare For <br />
          Your Family
        </h2>

        <div>
          <div className="mt-10 flex justify-between gap-x-7">
            <div>
              <RiRemoteControl2Fill className="text-6xl my-3"></RiRemoteControl2Fill>

              <p className="text-2xl">Quality controll <br /> system</p>

              <p className="text-sm pt-5">
                Lorem ipsum, dolor sit amet <br /> consectetur  adipisicing elit.{" "}
                <br /> Esse ratione cumque ipsum <br /> nemo repellendus ad ex sed{" "}
                <br />
              </p>
            </div>
            
            <div>
              <TbHeartHandshake className="text-6xl my-3"></TbHeartHandshake>

              <p className="text-2xl">Highly Professional <br /> Stuff</p>

              <p className="text-sm pt-5">
                Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit.{" "}
                <br /> Esse ratione cumque ipsum <br /> nemo repellendus ad ex
                sed <br />
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Activities;
