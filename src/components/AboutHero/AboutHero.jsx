import React from 'react';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';
import styles from './AboutHero.module.css';

const AboutHero = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.heroContainer} data-aos="fade">
      <div className={styles.contentWrapper}>
        <div className={styles.textColumn}>
          <span className={styles.badge}>Since 1985</span>
          <h1 className={styles.title}>A Legacy of Financial Trust & Innovation.</h1>
          <p className={styles.description}>
            For over four decades, SecureBank has been the cornerstone of financial 
            stability for millions. We combine traditional banking values with 
            modern technology to empower your financial journey.
          </p>
          <button className={styles.ctaButton} onClick={() => navigate('Error')}>
            Read Our History
          </button>
        </div>

        <div className={styles.statsColumn}>
          <div className={styles.statItem}>
            <h2 className={styles.statNumber}>
              <CountUp end={40} suffix="+" duration={2.5} />
            </h2>
            <p className={styles.statLabel}>Years of Service</p>
          </div>
          <div className={styles.statItem}>
            <h2 className={styles.statNumber}>
              <CountUp end={2} suffix="M+" decimals={1} duration={2.5} />
            </h2>
            <p className={styles.statLabel}>Happy Customers</p>
          </div>
          <div className={styles.statItem}>
            <h2 className={styles.statNumber}>
              <CountUp end={150} suffix="+" duration={2.5} />
            </h2>
            <p className={styles.statLabel}>Branches Worldwide</p>
          </div>
          <div className={styles.statItem}>
            <h2 className={styles.statNumber}>
              <CountUp end={50} suffix="B+" prefix="$" duration={2.5} />
            </h2>
            <p className={styles.statLabel}>Assets Managed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;