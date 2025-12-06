import React from 'react';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';
import styles from './ServicesHero.module.css';

const ServicesHero = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.heroContainer} data-aos="fade">
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <span className={styles.tagline}>Global Banking Standards</span>
          <h1 className={styles.title}>World-Class Financial Services</h1>
          <p className={styles.description}>
            From personal savings to complex corporate financing, we provide 
            secure and scalable solutions tailored to your unique financial 
            landscape. Experience banking without borders.
          </p>
          <div className={styles.btnGroup}>
            <button className={styles.primaryBtn} onClick={() => navigate('Error')}>
              Open Account
            </button>
            <button className={styles.secondaryBtn} onClick={() => navigate('Contact')}>
              Contact Support
            </button>
          </div>
        </div>

        <div className={styles.statsContent}>
          <div className={styles.statBox}>
            <h2 className={styles.statNumber}>
              <CountUp end={24} suffix="/7" duration={2} />
            </h2>
            <p className={styles.statLabel}>Support Access</p>
          </div>
          <div className={styles.statBox}>
            <h2 className={styles.statNumber}>
              <CountUp end={99.9} suffix="%" decimals={1} duration={2} />
            </h2>
            <p className={styles.statLabel}>Uptime Guarantee</p>
          </div>
          <div className={styles.statBox}>
            <h2 className={styles.statNumber}>
              <CountUp end={150} suffix="+" duration={2} />
            </h2>
            <p className={styles.statLabel}>Financial Products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;