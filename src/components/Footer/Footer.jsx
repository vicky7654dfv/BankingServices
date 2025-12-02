import React from "react";
import Style from "./Footer.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/Header/logo.webp"; 

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  return (
    <>
      <div className={Style.footerWrap}>
        {/* Box 1: Brand Info */}
        <div className={Style.box}>
          <div className={Style.logoContainer}>
            {/* Logo Image */}
            <img src={logo} alt="Bank Logo" className={Style.logoImg} />
            {/* Fallback Text if image fails or isn't needed */}
            <span className={Style.logoText}>SecureBank</span>
          </div>
          <p>
            Your trusted financial partner. We provide secure, innovative, 
            and personalized banking solutions to help you achieve your 
            financial goals and build a stable future.
          </p>
          <button 
            className={Style.aboutBtn}
            onClick={(e) => handleLinkClick(e, "/About")}
          >
            Our Heritage <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        {/* Box 2: Quick Links (Ditto as requested) */}
        <div className={Style.box}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/About" onClick={(e) => handleLinkClick(e, "/About")}>
                About Us
              </a>
            </li>
            <li>
              <a href="/Services" onClick={(e) => handleLinkClick(e, "/Services")}>
                Services
              </a>
            </li>
            <li>
              <a href="/Dashboard" onClick={(e) => handleLinkClick(e, "/Dashboard")}>
                Dashboard
              </a>
            </li>
            <li>
              <a href="/SignUp" onClick={(e) => handleLinkClick(e, "/SignUp")}>
                SignUp
              </a>
            </li>
          </ul>
        </div>

        {/* Box 3: Service Categories (Custom Links as requested) */}
        <div className={Style.box}>
          <h4>Service Categories</h4>
          <ul>
            <li>
              <a href="/FAQ" onClick={(e) => handleLinkClick(e, "/FAQ")}>
                FAQ
              </a>
            </li>
            <li>
              <a href="/Login" onClick={(e) => handleLinkClick(e, "/Login")}>
                Login
              </a>
            </li>
            <li>
              <a href="/Contact" onClick={(e) => handleLinkClick(e, "/Contact")}>
                Contact
              </a>
            </li>
            <li>
              <a href="/HomePage2" onClick={(e) => handleLinkClick(e, "/HomePage2")}>
                Home 2
              </a>
            </li>
          </ul>
        </div>

        {/* Box 4: Headquarters (Same as reference) */}
        <div className={Style.box}>
          <h4>Headquarters</h4>
          <ul className={Style.contactInfo}>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>
                MMR Complex, Chinna Thirupathi, near Chinna Muniyappan Kovil, 
                Salem, Tamil Nadu 636008
              </span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              +91 98765 43210
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              info@thestackly.com
            </li>
            <li>
              <i className="fa-solid fa-clock"></i>
              Mon - Fri: 09:00 AM - 07:00 PM
            </li>
          </ul>
        </div>

        {/* Box 5: Connect */}
        <div className={Style.box}>
          <h4>Connect With Us</h4>
          <p>
            Stay updated with the latest financial news, market trends, 
            and exclusive offers. Follow us on social media.
          </p>
          <div className={Style.media}>
            <a href="/Error" className={Style.socialLink} aria-label="Twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="/Error" className={Style.socialLink} aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="/Error" className={Style.socialLink} aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="/Error" className={Style.socialLink} aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={Style.bottomFooter}>
        <hr />
        <p>
          © 2025 SecureBank Ltd. All rights reserved. 
          Licensed by the Central Bank.
        </p>
      </div>
    </>
  );
}