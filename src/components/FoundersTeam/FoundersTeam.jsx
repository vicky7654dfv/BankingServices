import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FoundersTeam.module.css';
import p1 from "../../assets/About/Founders/1.webp"; // Replace with actual images
import p2 from "../../assets/About/Founders/2.webp"; 
import p3 from "../../assets/About/Founders/3.webp";

const FoundersTeam = () => {
  const navigate = useNavigate();
  
  const founders = [
    { id: 1, name: "Alexander Sterling", role: "Chairman & Founder", img: p1 },
    { id: 2, name: "Eleanor Vance", role: "Chief Executive Officer", img: p2 },
    { id: 3, name: "Robert Chen", role: "Chief Financial Officer", img: p3 }
  ];

  return (
    <section className={styles.teamContainer} data-aos="fade">
      <div className={styles.header}>
        <h2 className={styles.title}>Meet Our Leadership</h2>
        <p className={styles.subtitle}>The visionaries steering us towards a secure future.</p>
      </div>

      <div className={styles.grid}>
        {founders.map((person) => (
          <div key={person.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={person.img} alt={person.name} className={styles.profileImg} />
            </div>
            <h3 className={styles.name}>{person.name}</h3>
            <span className={styles.role}>{person.role}</span>
            <button className={styles.bioBtn} onClick={() => navigate('/Error')}>
              View Bio
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoundersTeam;