import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const backgroundImageUrl = 'https://img.freepik.com/free-vector/gradient-bokeh-white-background_53876-99912.jpg?t=st=1694445906~exp=1694446506~hmac=57f9a8e4d10508f413518341328441d4253661b32c3f807529b0dcccae3e448a';
  return (
    <footer className="footer grid-rows-2 p-10 bg-white text-black bg-center bg-cover bg-no-repeat "
    style={{backgroundImage:`url(${backgroundImageUrl})`}}>
      <div>
        <span className="footer-title">Services</span>
        <Link>Branding</Link>
        <Link>Design</Link>
        <Link>Marketing</Link>
        <Link>Advertisement</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link>About us</Link>
        <Link>Contact</Link>
        <Link>Jobs</Link>
        <Link>Press kit</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link>Terms of use</Link>
        <Link>Privacy policy</Link>
        <Link>Cookie policy</Link>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <Link>Twitter</Link>
        <Link>Instagram</Link>
        <Link>Facebook</Link>
        <Link>Github</Link>
      </div>
      <div>
        <span className="footer-title">Explore</span>
        <Link>Features</Link>
        <Link>Enterprise</Link>
        <Link>Security</Link>
        <Link>Pricing</Link>
      </div>
      <div>
        <span className="footer-title">Apps</span>
        <Link>Mac</Link>
        <Link>Windows</Link>
        <Link>iPhone</Link>
        <Link>Android</Link>
      </div>
    </footer>
  );
};

export default Footer;
