import React, { useState } from 'react';

const BookingForm = ({ movieName }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userNumber, setUserNumber] = useState('');


  const handleBooking = () => {

    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userNumber', userNumber);

    alert(`Tickets booked for ${movieName}!`);
  };

  return (
    <div className="booking-form-container">
      <h2>Booking Form for {movieName}</h2>
      <form>
        <label>
          Your Name:
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </label>
        <br/>
        <br />
        <br/>
        <label>
          Your Email:
          <input type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
        </label>
        <br/>
        <br/>
        <br />
        <label>
          Your Number:
          <input type="text" value={userNumber} onChange={(e) => setUserNumber(e.target.value)} />
        </label>
        <br/>
        <br />
        <button type="button" onClick={handleBooking}>
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
