import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styles from './Home.module.css';
import duneVideo from '../assets/dune-video.mp4';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src={duneVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        {/* Updated, more impactful text */}
        <h1>Your Desert Odyssey Begins</h1>
        <p>Unforgettable expeditions through the sands of time.</p>

        {/* New Call to Action Button */}
        <Link to="/experiences" className={styles.ctaButton}>
          View Experiences
        </Link>
      </div>
    </div>
  );
};

export default Home;