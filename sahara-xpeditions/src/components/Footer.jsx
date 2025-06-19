import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} Sahara Xpeditions. All Rights Reserved.</p>
      <p>An Adventure in the Heart of Egypt.</p>
    </footer>
  );
};

export default Footer;