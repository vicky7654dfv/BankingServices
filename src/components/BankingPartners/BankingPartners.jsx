import React from "react";
import styles from "./BankingPartners.module.css";
import { useNavigate } from "react-router-dom";

const BankingPartners = () => {
  // Placeholder data - Replace 'logo' string with actual image paths
  // e.g., import visaLogo from "../../assets/visa.png";
  const partners = [
    { id: 1, name: "SecureInsure", category: "Insurance Partner" },
    { id: 2, name: "Global Pay", category: "Payment Gateway" },
    { id: 3, name: "FinTech Corp", category: "Technology" },
    { id: 4, name: "Wealth Wise", category: "Investment Banking" },
    { id: 5, name: "HomeGuard", category: "Mortgage Solutions" },
    { id: 6, name: "AutoShield", category: "Vehicle Protection" },
    { id: 7, name: "Credit Union", category: "Lending Partner" },
    { id: 8, name: "Trust Estate", category: "Real Estate" },
  ];

  const navigate=useNavigate();
  return (
    <section className={styles.container} data-aos="fade-up">
      <div className={styles.header}>
        <h2 className={styles.title}>Our Strategic Partners</h2>
        <p className={styles.subtitle}>
          Collaborating with industry leaders to bring you the best financial services and security.
        </p>
      </div>

      <div className={styles.grid}>
        {partners.map((partner) => (
          <div key={partner.id} className={styles.card}>
            {/* In a real app, replace this text div with an <img> tag:
               <img src={partner.logoUrl} alt={partner.name} className={styles.logoImage} />
            */}
            <div className={styles.logoPlaceholder}>
              <span className={styles.logoText}>{partner.name}</span>
            </div>
            <span className={styles.category}>{partner.category}</span>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <p>Interested in becoming a corporate partner?</p>
        <button className={styles.ctaButton} onClick={()=>{navigate("/Error")}}>Contact Partnership Team</button>
      </div>
    </section>
  );
};

export default BankingPartners;