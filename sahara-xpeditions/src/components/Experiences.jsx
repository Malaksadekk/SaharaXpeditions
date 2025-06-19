import React from 'react';
import styles from './Experiences.module.css';
import sunriseSafari from '../assets/sunrise-safari.jpg';
import sunsetSafari from '../assets/sunset-safari.jpg';

const Experiences = () => {
  return (
    // This new section wrapper will hold our background color
    <section className={styles.experiencesSection}>
      <div className={`page-container ${styles.experiencesContainer}`}>
        <h2>Our Experiences</h2>
        <div className={styles.experienceCards}>
          <div className={styles.card}>
            <img src={sunriseSafari} alt="Sunrise Safari" />
            <div className={styles.cardContent}>
              <h3>Sunrise Safari</h3>
              <p>Witness the desert awaken with the first light of dawn.</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={sunsetSafari} alt="Sunset Safari" />
            <div className={styles.cardContent}>
              <h3>Sunset Safari</h3>
              <p>Experience the magical transformation of the desert as the sun sets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;