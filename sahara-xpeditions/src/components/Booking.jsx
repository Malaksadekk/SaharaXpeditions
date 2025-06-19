import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Booking.module.css';

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={`page-container ${styles.bookingContainer}`}>
      <h2>Book Your Sahara Xpedition</h2>
      <p>Select your desired dates to begin your journey into the dunes.</p>

      {/* New wrapper div to group the calendar and button */}
      <div className={styles.bookingForm}>
        <div className={styles.calendarWrapper}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
          />
        </div>
        <button className={styles.bookNowBtn}>Request Booking</button>
      </div>
      
    </div>
  );
};

export default Booking;