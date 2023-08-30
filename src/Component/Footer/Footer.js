import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer grid-rows-2 p-10 bg-neutral text-neutral-content">
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
