import React from 'react';
import Style from "./Banner1.module.css";
import { Link } from 'react-router-dom';
// Ensure you have a banking-related video in your assets
import bgVid from "../../assets/HomePage1/Banner1/vidBg.mp4" 

export default function Banner1() {
  return (
    <div data-aos="fade" className={Style.bannerContainer}>
      <video src={bgVid}
        autoPlay
        muted
        loop
        playsInline
        className={Style.backgroundVideo}
      />
      
      {/* Overlay is handled in CSS, content sits on top */}
      <div className={Style.content}>
        <h1 className={Style.title}>Secure Banking for You.</h1>
        <p className={Style.paragraph}>
          Experience the next generation of financial freedom.
          We provide secure, seamless, and smart banking solutions 
          tailored to your personal and business needs.
        </p>
        <Link to="Error" className={Style.ctaButton}>Open Account</Link>
      </div>
    </div>
  );
}