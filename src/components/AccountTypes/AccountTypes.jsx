import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AccountTypes.module.css';

const AccountTypes = () => {
  const navigate = useNavigate();

  const accounts = [
    {
      id: 1,
      name: "Classic Savings",
      rate: "4.0% APY",
      min: "$500 Min. Balance",
      features: ["Zero Monthly Fees", "Free Debit Card", "Mobile Banking"],
      highlight: false
    },
    {
      id: 2,
      name: "Premium Checking",
      rate: "Priority Support",
      min: "$5,000 Min. Balance",
      features: ["Unlimited Transfers", "Cashback Rewards", "Lounge Access"],
      highlight: true
    },
    {
      id: 3,
      name: "Fixed Deposit",
      rate: "7.5% APY",
      min: "$1,000 Investment",
      features: ["Guaranteed Returns", "Flexible Tenure", "Senior Citizen Benefits"],
      highlight: false
    }
  ];

  return (
    <section className={styles.accContainer} data-aos="fade">
      <div className={styles.header}>
        <h2 className={styles.title}>Choose Your Account</h2>
      </div>

      <div className={styles.grid}>
        {accounts.map((acc) => (
          <div 
            key={acc.id} 
            className={`${styles.card} ${acc.highlight ? styles.highlightCard : ''}`}
          >
            {acc.highlight && <div className={styles.badge}>Most Popular</div>}
            <h3 className={styles.accName}>{acc.name}</h3>
            <div className={styles.rate}>{acc.rate}</div>
            <p className={styles.minBal}>{acc.min}</p>
            <ul className={styles.featureList}>
              {acc.features.map((feat, idx) => (
                <li key={idx}><i className="fa-solid fa-check"></i> {feat}</li>
              ))}
            </ul>
            <button className={styles.applyBtn} onClick={() => navigate('/Error')}>
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccountTypes;