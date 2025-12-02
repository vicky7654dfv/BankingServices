import React, { useState } from "react";
import styles from "./FAQPage.module.css";

export default function FAQPage() {
  // State to track the currently open question (categoryIndex-questionIndex)
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    // If the clicked key is already active, close it (set to null), otherwise open it
    setActiveKey(activeKey === key ? null : key);
  };

  const faqData = [
    {
      category: "General Banking",
      questions: [
        {
          id: 1,
          q: "What documents do I need to open a savings account?",
          a: "To open a standard savings account, you will need a valid government-issued ID (Passport, Driver's License), proof of address (utility bill or bank statement less than 3 months old), and your Social Security Number or Tax ID."
        },
        {
          id: 2,
          q: "Are there any monthly maintenance fees?",
          a: "Our 'Classic Savings' and 'Student' accounts are fee-free. For Premium accounts, the $12 monthly fee is waived if you maintain a minimum daily balance of $1,500 or have direct deposits totaling $500+ per month."
        },
        {
          id: 3,
          q: "How can I update my personal contact information?",
          a: "You can update your email and phone number instantly via our Mobile App under 'Profile Settings'. For address changes, please upload a new proof of address document via the secure message center or visit a local branch."
        }
      ]
    },
    {
      category: "Loans & Mortgages",
      questions: [
        {
          id: 4,
          q: "How long does the loan approval process take?",
          a: "For Personal Loans, decisions are typically made within 24 hours. Home Loan and Mortgage pre-approvals take 2-3 business days, while final closing times depend on property appraisals and document verification, usually taking 30-45 days."
        },
        {
          id: 5,
          q: "Can I pay off my loan early without penalties?",
          a: "Yes! We believe in financial freedom. Most of our personal and auto loans have zero prepayment penalties. You can make extra payments or pay off the full balance at any time to save on interest."
        },
        {
          id: 6,
          q: "What affects my interest rate?",
          a: "Your interest rate is determined by several factors including your credit score, debt-to-income ratio, loan term length, and the loan amount. Higher credit scores generally qualify for our lowest advertised rates."
        }
      ]
    },
    {
      category: "Digital Banking & Mobile App",
      questions: [
        {
          id: 7,
          q: "Is the mobile banking app secure?",
          a: "Absolutely. Our app uses Biometric Login (FaceID/Fingerprint), 256-bit SSL encryption, and instant transaction alerts. We also feature a 'Kill Switch' that allows you to instantly freeze your cards from the app if you suspect fraud."
        },
        {
          id: 8,
          q: "What should I do if I forget my password?",
          a: "Click 'Forgot Password' on the login screen. You will be asked to verify your identity via a one-time code sent to your registered mobile number or email. Once verified, you can reset your password instantly."
        }
      ]
    },
    {
      category: "Security & Fraud Protection",
      questions: [
        {
          id: 9,
          q: "What happens if I spot an unauthorized transaction?",
          a: "Contact our Fraud Support team immediately at 1-800-SECURE-BK or dispute the transaction via the mobile app. We offer Zero Liability Protection, meaning you won't be held responsible for unauthorized charges reported promptly."
        },
        {
          id: 10,
          q: "Do you offer travel notifications for my cards?",
          a: "Yes, to prevent your card from being blocked while traveling abroad, please set a 'Travel Notice' in the app or online banking portal 24 hours before your trip. This ensures uninterrupted usage internationally."
        }
      ]
    }
  ];

  return (
    <div className={styles.faqWrap} data-aos="fade">
      <div className={styles.container}>
        <div className={styles.header}>
          <h4 className={styles.subTitle}>Help & Support</h4>
          <h1 className={styles.mainTitle}>Frequently Asked <span className={styles.accent}>Questions</span></h1>
          <p className={styles.description}>
            Find answers to common questions about your accounts, loans, security, 
            and digital services. Can't find what you're looking for? 
            Contact our 24/7 support team.
          </p>
        </div>

        <div className={styles.faqContent}>
          {faqData.map((section, catIndex) => (
            <div key={catIndex} className={styles.categorySection}>
              <h3 className={styles.catTitle}>{section.category}</h3>
              <div className={styles.accordionGroup}>
                {section.questions.map((item, qIndex) => {
                  const uniqueKey = `${catIndex}-${qIndex}`;
                  const isActive = activeKey === uniqueKey;

                  return (
                    <div 
                      key={item.id} 
                      className={`${styles.accordionItem} ${isActive ? styles.activeItem : ''}`}
                    >
                      <button 
                        className={styles.accordionHeader} 
                        onClick={() => toggleAccordion(uniqueKey)}
                        aria-expanded={isActive}
                      >
                        <span className={styles.questionText}>{item.q}</span>
                        <span className={styles.icon}>
                          <i className={`fa-solid ${isActive ? 'fa-minus' : 'fa-plus'}`}></i>
                        </span>
                      </button>
                      
                      <div 
                        className={styles.accordionBody}
                        style={{ maxHeight: isActive ? "300px" : "0px" }}
                      >
                        <div className={styles.answerContent}>
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}