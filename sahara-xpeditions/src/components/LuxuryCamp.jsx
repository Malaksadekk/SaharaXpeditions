import React from 'react';
import styles from './LuxuryCamp.module.css';
// Make sure you have an image file at this path
import tentImage from '../assets/luxury-tent.jpg';

const LuxuryCamp = () => {
  return (
    <div className={`page-container ${styles.luxuryCampContainer}`}>
      <h2>Luxury Camp</h2>
      <div className={styles.accommodation}>
        <div className={styles.imageContainer}>
          <img src={tentImage} alt="Luxury Tent" />
        </div>
        <div className={styles.accommodationDetails}>
          <h3>Your Oasis in the Desert</h3>
          <p>Our luxury tents provide the perfect blend of comfort and adventure. Each tent is equipped with modern amenities to ensure a relaxing stay.</p>
          <ul>
            <li>Plush, King-Sized Bedding</li>
            <li>En-suite Bathroom with Hot Water</li>
            <li>Private Deck with Panoramic Views</li>
            <li>Gourmet Dining Included</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LuxuryCamp;