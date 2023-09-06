import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user, "nav");
  const logOutHandler = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  const navItem = (
    <React.Fragment>
      <li className="lg:py-5 px-3 font-semibold hover:text-cyan-400 ">
        {" "}
        <Link to="/">Home</Link>{" "}
      </li>
      <li className="lg:py-5 px-3 font-semibold hover:text-cyan-400 ">
        <Link to="/allservices">Service</Link>
      </li>
      <li className="lg:py-5 px-3 font-semibold hover:text-cyan-400 ">
        {" "}
        <Link to="">About</Link>{" "}
      </li>
      <li className="lg:py-5 px-3 font-semibold hover:text-cyan-400 ">
        {" "}
        <Link to="">Contact</Link>{" "}
      </li>
      {user?.uid ? (
        <>
          {/* {/* <li>
            <Link className="font-semibold" to="/addservice">
              Add service
            </Link>
            </li>
            <li>
            <Link className="font-semibold" to="/myreview">
              My review
            </Link>
            </li> */}

          {/* <FaUserCircle className="text-2xl mt-3"></FaUserCircle>{" "} */}
          {/* <li
            onClick={logOutHandler}
            className="btn btn-xs  mt-3 lg:y-2 px-3 font-semibold hover:text-cyan-400 "
          >
            {" "}
            logout
          // </li> */}

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className=" m-1">
              {user.photoURL ? (
                <img
                  className="w-16 h-16 rounded-full cursor-pointer"
                  alt="user"
                  src={user.photoURL}
                />
              ) : (
                <FaUserCircle className="text-2xl cursor-pointer  "></FaUserCircle>
              )}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48"
            >
              <li className="ml-3 text-black text-xl font-semibold ">
                {user?.displayName}
              </li>
              <li>
                <button className="text-blue-500 " onClick={logOutHandler}>
                  logout
                </button>
              </li>
              <li>
                <Link to="/dashboard" className="text-blue-500 ">
                  My Appointment
                </Link>
              </li>
              <li>
                <Link className="text-blue-500" to="/myreview">
                  My review
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Link
          className="text-lg ml-7 md:ml-0 mt-2 lg:mt-7 font-semibold rounded-full"
          to="/login"
        >
          Login
        </Link>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar py-4 h-20 bg-base-100 shadow-md">
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
            
            {user && (
              <li
                onClick={logOutHandler}
                className=" lg:y-2 px-3 font-semibold hover:text-cyan-400 "
              >
                logout
              </li>
            )}
            {/* {user?.uid ? <li></li> : <li>Login</li>} */}
          </ul>
        </div>
        <img className="rounded-full" src="logo.jpg" width="50px" alt="logo" />
        <Link className=" normal-case text-xl italic font-mono " to="/">
          Dentop
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu  menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-en  "></div>
    </div>
  );
};

export default Navbar;
