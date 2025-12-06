import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AccountVariations.module.css';

const AccountVariations = () => {
  const navigate = useNavigate();

  const accounts = [
    { title: "Savings Account", icon: "fa-piggy-bank", desc: "High interest rates with zero maintenance fees." },
    { title: "Current Account", icon: "fa-briefcase", desc: "Seamless transactions for your daily business needs." },
    { title: "Salary Account", icon: "fa-money-bill-wave", desc: "Exclusive benefits and overdraft facilities for employees." },
    { title: "Fixed Deposit", icon: "fa-vault", desc: "Secure your wealth with guaranteed returns." },
  ];

  return (
    <section className={styles.container} data-aos="fade">
      <div className={styles.header}>
        <h2>Tailored Accounts for You</h2>
        <p>Choose the banking solution that fits your lifestyle.</p>
      </div>

      <div className={styles.grid}>
        {accounts.map((acc, index) => (
          <div key={index} className={styles.card} onClick={() => navigate('/Error')}>
            <div className={styles.iconBox}>
              <i className={`fa-solid ${acc.icon}`}></i>
            </div>
            <h3>{acc.title}</h3>
            <p>{acc.desc}</p>
            <span className={styles.link}>View Details &rarr;</span>
          </div>
        ))}
      </div>

      <div className={styles.appSection}>
        <div className={styles.appContent}>
          <h3>Bank on the Go</h3>
          <p>Download the SecureBank App for iOS and Android.</p>
          <div className={styles.storeButtons}>
            <button className={styles.storeBtn} onClick={() => navigate('/Error')}>
              <i className="fa-brands fa-apple"></i> App Store
            </button>
            <button className={styles.storeBtn} onClick={() => navigate('/Error')}>
              <i className="fa-brands fa-google-play"></i> Play Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountVariations;