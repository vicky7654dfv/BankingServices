import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './InsuranceSchemes.module.css';

const InsuranceSchemes = () => {
  const navigate = useNavigate();

  const schemes = [
    {
      id: 1,
      title: "Life Insurance",
      desc: "Secure your family's future with our comprehensive term life plans.",
      icon: "fa-solid fa-heart-pulse",
      color: "#9d1d2c" // Red
    },
    {
      id: 2,
      title: "Health Guard",
      desc: "Cashless treatment at over 5,000 network hospitals nationwide.",
      icon: "fa-solid fa-notes-medical",
      color: "#059669" // Green
    },
    {
      id: 3,
      title: "Auto Shield",
      desc: "Complete protection for your vehicle against accidents and theft.",
      icon: "fa-solid fa-car-burst",
      color: "#1e3a8a" // Blue
    },
    {
      id: 4,
      title: "Home Protect",
      desc: "Coverage for your property against natural calamities and burglary.",
      icon: "fa-solid fa-house-chimney",
      color: "#d97706" // Amber
    }
  ];

  return (
    <section className={styles.insContainer} data-aos="fade">
      <div className={styles.header}>
        <h2 className={styles.title}>Insurance & Protection</h2>
        <p className={styles.subtitle}>Stay prepared for the unexpected.</p>
      </div>

      <div className={styles.list}>
        {schemes.map((item) => (
          <div key={item.id} className={styles.item} style={{ borderLeftColor: item.color }}>
            <div className={styles.iconBox} style={{ color: item.color }}>
              <i className={item.icon}></i>
            </div>
            <div className={styles.content}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.desc}</p>
            </div>
            <button 
              className={styles.viewBtn} 
              style={{ color: item.color, borderColor: item.color }}
              onClick={() => navigate('/Error')}
            >
              View Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsuranceSchemes;