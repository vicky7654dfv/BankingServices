import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DigitalServices.module.css';

const DigitalServices = () => {
  const navigate = useNavigate();

  const digitalItems = [
    { title: "Mobile Banking", icon: "fa-mobile-screen", text: "Bank anytime, anywhere with our secure app." },
    { title: "Internet Banking", icon: "fa-globe", text: "Manage accounts and bills from your desktop." },
    { title: "Credit Cards", icon: "fa-credit-card", text: "Exclusive rewards and cashback on every spend." },
    { title: "Debit Cards", icon: "fa-id-card", text: "Easy withdrawals and contactless payments." },
    { title: "NEFT / RTGS", icon: "fa-money-bill-transfer", text: "Instant money transfers 24/7." },
    { title: "UPI Payments", icon: "fa-qrcode", text: "Scan and pay seamlessly with Unified Payments." },
  ];

  return (
    <section className={styles.digiContainer} data-aos="fade">
      <div className={styles.header}>
        <h2>Digital Convenience</h2>
        <p>Modern banking tools at your fingertips.</p>
      </div>

      <div className={styles.grid}>
        {digitalItems.map((item, index) => (
          <div key={index} className={styles.item} onClick={() => navigate('/Error')}>
            <div className={styles.iconCircle}>
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <div className={styles.itemContent}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
            <div className={styles.arrow}>&rarr;</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalServices;