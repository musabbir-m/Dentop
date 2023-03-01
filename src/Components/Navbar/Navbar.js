import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const logOutHandler = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  const navItem = (
    <React.Fragment>
      <li className="lg:y-2 px-3 font-semibold hover:text-cyan-400 ">
        {" "}
        <Link to="/">Home</Link>{" "}
      </li>
      <li className="lg:y-2 px-3 font-semibold hover:text-cyan-400 ">
        <Link to="/allservices">Service</Link>
      </li>
      <li className="lg:y-2 px-3 font-semibold hover:text-cyan-400 ">
        {" "}
        <Link to="">About</Link>{" "}
      </li>
      <li className="lg:y-2 px-3 font-semibold hover:text-cyan-400 ">
        {" "}
        <Link to="">Contact</Link>{" "}
      </li>
      {user?.uid ? (
          <>
            <li>
            <Link className="font-semibold" to="/addservice">
              Add service
            </Link>
            </li>
            <li>
            <Link className="font-semibold" to="/myreview">
              My review
            </Link>
            </li>
                     
            <FaUserCircle className="text-2xl"></FaUserCircle>{" "}
            <li
              onClick={logOutHandler}
              className="btn btn-xs mr-3 lg:y-2 px-3 font-semibold hover:text-cyan-400 "
            >
              {" "}
              logout
            </li>
          </>
        ) : (
          <Link className="mr-5 text-lg font-semibold" to="/login">
            Login
          </Link>
        )}

    </React.Fragment>
  );
  return (
    <div className="navbar py-5 bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
            <li>
              {" "}
              <Link className=" font-semibold bg-cyan-400 border-none mr-6">
                Get Appointment
              </Link>
            </li>
            {user && (
              <li
                onClick={logOutHandler}
                className=" lg:y-2 px-3 font-semibold hover:text-cyan-400 "
              >
                logout
              </li>
            )}
            {user?.uid ? <li></li> : <li>Login</li>}
          </ul>
        </div>
        <img className="rounded-full" src="logo1.png" width="50px" alt="logo" />
        <Link className="btn btn-ghost normal-case text-xl -ml-2">Dentop</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu  menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end  ">
        {/* {user && (
          <>
            {" "}
            <FaUserCircle className="text-2xl"></FaUserCircle>{" "}
            <li
              onClick={logOutHandler}
              className="btn btn-xs mr-3 lg:y-2 px-3 font-semibold hover:text-cyan-400 "
            >
              {" "}
              logout
            </li>
          </>
        )} */}
       

        <Link className="btn  bg-cyan-400 border-none mr-6 hidden lg:flex">
          Get Appointment
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
