import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {  logIn, googleSignIn } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  //navigate to right route
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //email password login
  const handleLogin = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((user) => {
        const currentUser = user.user;
        console.log(currentUser);
        setError("");
        setSuccess(true);
        form.reset();
        navigate(from, { replace: true });
       
      })
      .catch((err) => {
        console.error(err);
        const errorMessage = err.message;
        setError(errorMessage);
      });
  };

   //google signin

   const handleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true)
        setError("")
      })
      .catch((err) => {
        setError(err);
      });}

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
          Hello, <br /> Welcome Back!
        </h2>
        <div className="card flex-shrink-0 w-full max-w-xs shadow-xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
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
                name="password"
                placeholder="password"
                className=" px-5 py-2 bg-gray-100 border-r-4 rounded border-cyan-600"
              />
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <p className="text-sm mb-2">Don't have an account? <Link className="link text-cyan-600 font-semibold" to='/signup'>Sign up</Link> </p>
            <p className="text-red-500">{error}</p>
                {success && (
                  <p className="text-success p-2">logged in successfully</p>
                )}
              <button className=" text-white font-bold px-3 py-2 rounded-sm bg-cyan-500">
                Login
              </button>
            </div>
            </form>
            <p className="text-lg font-semibold text-center">Or <br />Sign in with</p>
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

export default Login;
