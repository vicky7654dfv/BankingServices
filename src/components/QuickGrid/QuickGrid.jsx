import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './QuickGrid.module.css';

const QuickGrid = () => {
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      title: "Careers",
      text: "Join a team of innovators and banking experts. Build your future with us.",
      btnText: "Explore Jobs"
    },
    {
      id: 2,
      title: "Investor Relations",
      text: "Financial reports, stock information, and corporate governance for shareholders.",
      btnText: "View Reports"
    },
    {
      id: 3,
      title: "Sustainability",
      text: "Our commitment to green banking and reducing our environmental footprint.",
      btnText: "Our Pledge"
    },
    {
      id: 4,
      title: "Media & Press",
      text: "Latest news, press releases, and media kits for journalists and publishers.",
      btnText: "Newsroom"
    }
  ];

  return (
    <section className={styles.gridContainer} data-aos="fade">
      <div className={styles.gridWrapper}>
        {items.map((item) => (
          <div key={item.id} className={styles.gridItem}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemText}>{item.text}</p>
            <button 
              className={styles.itemBtn} 
              onClick={() => navigate('/Error')}
            >
              {item.btnText} &rarr;
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickGrid;