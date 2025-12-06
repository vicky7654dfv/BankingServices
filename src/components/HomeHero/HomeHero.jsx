import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomeHero.module.css';
// Replace with your actual image path
import heroBg from '../../assets/HomePage2/HomeHero/bgImg.webp'; 

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <section 
      className={styles.heroContainer} 
      data-aos="fade"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Banking Beyond Boundaries</h1>
          <p className={styles.paragraph}>
            Experience a new era of financial freedom. From personal growth to 
            global business expansion, we are the partner you can trust.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn} onClick={() => navigate('Error')}>
              Open an Account
            </button>
            <button className={styles.secondaryBtn} onClick={() => navigate('Error')}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;