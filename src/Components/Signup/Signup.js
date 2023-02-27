import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Signup = () => {
  const {  signUp, googleSignIn, updateUser} = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    // signup
  signUp(email,password)
  .then(
    (result)=> {
        const user= result.user
        console.log(user);
        setSuccess(true)
        setError("")
        toast('User created successfully')
        const userInfo= {
            displayName: name
        }
        updateUser(userInfo)
        .then(()=>{})
        .catch((err)=>console.log(err))

        form.reset()
        
    }
  )
  .catch(
    (error)=> {
        console.log(error)
        setError(error.message)
        setSuccess(false)
    }
  )
  
  };


  //google signin

  const handleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true)
      })
      .catch((err) => {
        setError(err);
      });


  };
  return (
    <div className="flex flex-col md:flex-row justify-center mt-24 mb-10">
      <div className="px-3">
        {" "}
        <img
          className="h-72"
          src="https://i.ibb.co/56xt5cF/Login-Dentop.jpg"
          alt=""
        />
      </div>

      <div>
        <h2 className=" pl-8 text-xl text-indigo-800">
          Hi, <br /> Signup to join us!
        </h2>
        <div className="card flex-shrink-0 w-full max-w-xs shadow-xl bg-base-100">
          <div className="card-body">
            {/* Signup form */}
            <form onSubmit={handleSubmit} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="your name"
                  className=" px-5 py-2 bg-gray-100 border-r-4 rounded border-cyan-600"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="px-5 py-2 bg-gray-100 border-r-4 rounded border-cyan-600"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className=" px-5 py-2 bg-gray-100 border-r-4 rounded border-cyan-600"
                />
                <label className="label">
                  <p>
                    Already have an account?{" "}
                    <Link
                      className="link text-cyan-600 font-semibold"
                      to="/login"
                    >
                      Login
                    </Link>
                  </p>
                </label>
              </div>

             

              <div className="form-control mt-6">
              <p className="text-red-500">{error}</p>
                
                <button className=" text-white font-bold px-3 py-2 rounded-sm bg-cyan-500">
                  Signup
                </button>
              </div>
            </form>
            <h4 className="text-center text-lg font-semibold">Or Join with </h4>
            <button onClick={handleGoogleSignin} className="text-white font-bold px-3 py-2 rounded-sm bg-slate-600">
              {" "}
              <FcGoogle className="inline"></FcGoogle> Google
            </button>
            <button className="text-white font-bold px-3 py-2 rounded-sm bg-slate-600">
              {" "}
              <FaFacebook className="inline text-blue-900 bg-white"></FaFacebook>{" "}
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
