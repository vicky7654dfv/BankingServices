import React, { useState, useEffect } from 'react';
import styles from "./Loader.module.css";
import logo from "../../assets/Header/logo.webp"; 

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.loaderWrap} ${!isVisible ? styles.fadeOut : ''}`}>
      <div className={styles.loaderContainer}>
        <div className={styles.logoBox}>
          <img 
            src={logo} 
            alt="SecureBank Logo" 
            className={styles.logo}
          />
        </div>
      </div>
    </div>
  );
}