import React from 'react';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';
import styles from './BusinessBanking.module.css';
// Replace with your actual video path
import bizVideo from '../../assets/HomePage2/BusinessBanking/bgVid.mp4'; 

const BusinessBanking = () => {
  const navigate = useNavigate();

  const services = [
    "Business Checking & Savings",
    "Small Business Administration (SBA)",
    "Commercial Loans & Lines of Credit",
    "Merchant Services & Payroll",
    "E-Banking & Treasury Management"
  ];

  return (
    <section className={styles.bizContainer} data-aos="fade">
      <div className={styles.wrapper}>
        
        {/* Left Content */}
        <div className={styles.contentSide}>
          <span className={styles.overline}>For Enterprises</span>
          <h2 className={styles.title}>Powering Your Business Growth</h2>
          <p className={styles.description}>
            We provide comprehensive financial solutions designed to scale with your 
            ambitions. From startups to established corporations, our tools 
            streamline your operations.
          </p>
          
          <ul className={styles.serviceList}>
            {services.map((item, index) => (
              <li key={index} onClick={() => navigate('/Error')}>
                <i className="fa-solid fa-check-circle"></i> {item}
              </li>
            ))}
          </ul>

          <div className={styles.statBox}>
            <div className={styles.stat}>
              <strong><CountUp end={500} suffix="M+" prefix="$" duration={2.5} /></strong>
              <span>Loans Disbursed</span>
            </div>
            <div className={styles.stat}>
              <strong><CountUp end={10} suffix="K+" duration={2.5} /></strong>
              <span>Businesses Supported</span>
            </div>
          </div>
        </div>

        {/* Right Content - Video */}
        <div className={styles.videoSide}>
          <div className={styles.videoWrapper}>
            <video 
              src={bizVideo} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className={styles.video}
            />
            <div className={styles.videoOverlay}></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessBanking;