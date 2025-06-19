import React from 'react';
import styles from './Safety.module.css';

const Safety = () => {
  return (
    <div className={`page-container ${styles.safetyContainer}`}>
      <h2>Safety at Sahara Xpeditions</h2>
      <div className={styles.safetyInfo}>
        <div className={styles.safetyItem}>
          <h3>State-of-the-Art Equipment</h3>
          <p>At Sahara Xpeditions, we use the latest 4x4 vehicles, GPS technology, and safety gear to ensure your security and comfort.</p>
        </div>
        <div className={styles.safetyItem}>
          <h3>Experienced & Certified Guides</h3>
          <p>Our guides are highly trained in first aid, emergency response, and have extensive knowledge of the desert terrain and wildlife.</p>
        </div>
        <div className={styles.safetyItem}>
          <h3>Health & Hygiene</h3>
          <p>We adhere to strict hygiene protocols at our luxury camp and during all activities to ensure a clean and healthy environment for our guests.</p>
        </div>
      </div>
    </div>
  );
};

export default Safety;