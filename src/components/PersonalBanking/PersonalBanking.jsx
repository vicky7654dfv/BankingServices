import React from "react";
import styles from "./PersonalBanking.module.css";
import { useNavigate } from "react-router-dom";

const PersonalBanking = () => {
  const products = [
    {
      id: 1,
      title: "Savings Account",
      rate: "4.5% APY",
      desc: "Grow your wealth with high-interest rates and zero monthly maintenance fees.",
      tag: "Popular",
    },
    {
      id: 2,
      title: "Salary Account",
      rate: "Zero Balance",
      desc: "Seamless salary credits with exclusive debit card rewards and cashback.",
      tag: "Corporate",
    },
    {
      id: 3,
      title: "Senior Citizen",
      rate: "0.5% Extra",
      desc: "Special privileges, priority service, and higher returns for your golden years.",
      tag: "Exclusive",
    },
  ];

  const features = [
    { icon: "📱", title: "Instant UPI", text: "Send money instantly via mobile." },
    { icon: "🛡️", title: "Fraud Protection", text: "24/7 monitoring of your funds." },
    { icon: "✈️", title: "Travel Rewards", text: "Earn miles on every swipe." },
    { icon: "📄", title: "Paperless", text: "100% digital account opening." },
  ];

  const navigate=useNavigate();

  return (
    <div className={styles.container} data-aos="fade-up">
      {/* Hero Text */}
      <div className={styles.heroSection}>
        <span className={styles.overline}>Personal Banking</span>
        <h1 className={styles.mainTitle}>Banking designed for <br /> your everyday life.</h1>
        <p className={styles.subTitle}>
          Manage your money with simplicity. From daily expenses to long-term goals, 
          we have the right account for you.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.primaryBtn} onClick={()=>{navigate("Error")}}>Open Account</button>
          <button className={styles.secondaryBtn} onClick={()=>{navigate("Error")}}>Compare Plans</button>
        </div>
      </div>

      {/* Account Types Grid */}
      <div className={styles.productGrid}>
        {products.map((item) => (
          <div key={item.id} className={styles.productCard}>
            <div className={styles.cardTop}>
              <span className={styles.cardTag}>{item.tag}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </div>
            <div className={styles.cardRate}>{item.rate}</div>
            <p className={styles.cardDesc}>{item.desc}</p>
            <button className={styles.cardLink} onClick={()=>{navigate("Error")}}>View Details &rarr;</button>
          </div>
        ))}
      </div>

      {/* Mobile App Section */}
      <div className={styles.appSection}>
        <div className={styles.appContent}>
          <h2 className={styles.appTitle}>Bank on the go.</h2>
          <p className={styles.appText}>
            Download our award-winning mobile app. Check balances, transfer funds, 
            and pay bills from anywhere in the world.
          </p>
          <div className={styles.featureList}>
            {features.map((feat, index) => (
              <div key={index} className={styles.featureItem}>
                <span className={styles.featureIcon}>{feat.icon}</span>
                <div>
                  <strong className={styles.featureTitle}>{feat.title}</strong>
                  <p className={styles.featureText}>{feat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalBanking;