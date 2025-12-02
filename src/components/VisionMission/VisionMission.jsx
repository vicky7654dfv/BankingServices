import React from 'react';
import styles from './VisionMission.module.css';

const VisionMission = () => {
  return (
    <section className={styles.vmContainer} data-aos="fade">
      <div className={styles.wrapper}>
        
        {/* Vision Block */}
        <div className={styles.block}>
          <div className={styles.iconBox}>👁️</div>
          <h2 className={styles.heading}>Our Vision</h2>
          <p className={styles.text}>
            To be the world's most trusted financial partner, redefining the 
            banking experience through innovation, integrity, and inclusivity. 
            We envision a future where financial freedom is accessible to all, 
            driven by sustainable practices and cutting-edge technology that 
            anticipates the needs of tomorrow's economy today.
          </p>
          <ul className={styles.points}>
            <li>Global Reach, Local Touch</li>
            <li>Sustainable Financial Growth</li>
            <li>Tech-Driven Accessibility</li>
          </ul>
        </div>

        {/* Divider Line */}
        <div className={styles.divider}></div>

        {/* Mission Block */}
        <div className={styles.block}>
          <div className={styles.iconBox}>🚀</div>
          <h2 className={styles.heading}>Our Mission</h2>
          <p className={styles.text}>
            We are dedicated to providing secure, transparent, and personalized 
            financial solutions. Our mission is to empower individuals and 
            businesses to achieve their goals by fostering a culture of 
            excellence, adhering to the highest ethical standards, and 
            building lasting relationships based on mutual respect and 
            unwavering support.
          </p>
          <ul className={styles.points}>
            <li>Customer-Centric Innovation</li>
            <li>Uncompromising Security</li>
            <li>Community Empowerment</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;