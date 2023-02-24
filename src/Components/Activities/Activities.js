import React from "react";
import { TfiCheckBox } from "react-icons/tfi";
import { RiRemoteControl2Fill } from "react-icons/ri";
import { TbHeartHandshake } from "react-icons/tb";

const Activities = () => {
  return (
    <div className="-mt-10 h-  lg:flex justify-around  mb-32 bg-slate-100 mx-10 shadow-md rounded-md ">
      <div className=" overflow-hidden  pt-12 ">
        <img
          className=" max-h-[500px] w-auto"
          height=""
          src="https://thumbs.dreamstime.com/b/male-dentist-doctor-dental-clinic-portrait-male-dentist-doctor-dental-clinic-portrait-happy-dentistry-doctor-wearing-115999735.jpg"
          alt=""
        />
      </div>

      <div className="pt-10 px-5 mx-2">
        <h3 className="text-xl font-semibold text-cyan-400">WHAT WE DO</h3>
        <h2 className="text-5xl font-semibold mt-5">
          True Healthcare For <br />
          Your Family
        </h2>

        <div>
          <div className="mt-10 flex justify-around">
            <div>
              <RiRemoteControl2Fill className="text-6xl my-3"></RiRemoteControl2Fill>

              <p className="text-2xl">Quality controll system</p>

              <p className="text-sm pt-5">
                Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.{" "}
                Esse ratione cumque ipsum <br /> nemo repellendus ad ex sed{" "}
                <br />
              </p>
            </div>
            <div>
              <TbHeartHandshake className="text-6xl my-3"></TbHeartHandshake>

              <p className="text-2xl">Quality controll system</p>

              <p className="text-sm pt-5">
                Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit.{" "}
                <br /> Esse ratione cumque ipsum <br /> nemo repellendus ad ex
                sed <br />
              </p>
            </div>
          </div>
          <button className=" mx-auto bg-cyan-400 rounded-md px-4 py-4 text-xl font-semibold text-white" >Get Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Activities;
