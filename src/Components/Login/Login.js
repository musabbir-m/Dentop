import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center mt-24 mb-10">
     <div className="px-3"> <img className="h-72" src="https://i.ibb.co/56xt5cF/Login-Dentop.jpg" alt="" /></div>

      <div>
        <h2 className=" pl-8 text-xl text-indigo-800">Hello, <br /> Welcome Back!</h2>
      <div className="card flex-shrink-0 w-full max-w-xs shadow-xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="px-5 py-2 bg-gray-100 border-r-4 rounded border-cyan-600"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className=" px-5 py-2 bg-gray-100 border-r-4 rounded border-cyan-600"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className=" text-white font-bold px-3 py-2 rounded-sm bg-cyan-500">Login</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
