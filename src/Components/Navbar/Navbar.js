import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItem = (
    <React.Fragment>
      <li className="lg:y-2 px-3 font-semibold hover:text-cyan-400 ">Home</li>
      <li className="lg:y-2 px-3 font-semibold hover:text-cyan-400 ">Service</li>
      <li className="lg:y-2 px-3 font-semibold hover:text-cyan-400 ">About</li>
      <li className="lg:y-2 px-3 font-semibold hover:text-cyan-400 ">Contact</li>
      

    </React.Fragment>
      
        

  );
  return (
    <div className="navbar py-5 bg-base-100 shadow-md">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItem}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl ml-6">Dentop</a> <img className="rounded-full" src="logo1.png" width='50px' alt="logo" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu  menu-horizontal px-1">
      {navItem}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-cyan-400 border-none mr-6">Get Appointment</a>
  </div>
</div>
  );
};

export default Navbar;
