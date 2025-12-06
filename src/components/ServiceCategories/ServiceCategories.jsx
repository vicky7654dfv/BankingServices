import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ServiceCategories.module.css';

const ServiceCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      icon: "fa-solid fa-user-shield",
      title: "Personal Banking",
      desc: "Savings, checking, and personal loans tailored to your lifestyle."
    },
    {
      id: 2,
      icon: "fa-solid fa-briefcase",
      title: "Corporate Banking",
      desc: "Scalable financial solutions and payroll management for businesses."
    },
    {
      id: 3,
      icon: "fa-solid fa-chart-line",
      title: "Wealth Management",
      desc: "Expert investment strategies to grow and protect your portfolio."
    },
    {
      id: 4,
      icon: "fa-solid fa-laptop-code",
      title: "Digital Banking",
      desc: "Seamless online and mobile banking experiences available 24/7."
    }
  ];

  return (
    <section className={styles.catContainer} data-aos="fade">
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Our Core Services</h2>
        <p className={styles.sectionSub}>Comprehensive solutions for every financial need.</p>
      </div>
      
      <div className={styles.grid}>
        {categories.map((cat) => (
          <div key={cat.id} className={styles.card} onClick={() => navigate('Error')}>
            <div className={styles.iconWrapper}>
              <i className={cat.icon}></i>
            </div>
            <h3 className={styles.cardTitle}>{cat.title}</h3>
            <p className={styles.cardDesc}>{cat.desc}</p>
            <span className={styles.arrowLink}>Learn More &rarr;</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCategories;