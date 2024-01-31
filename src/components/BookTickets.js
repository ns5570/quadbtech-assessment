import React, { useState, useEffect } from 'react';

const BookTickets = ({ match }) => {
  const { id } = match.params;
  const [showDetails, setShowDetails] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [numberOfTickets, setNumberOfTickets] = useState(1);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShowDetails(data));
  }, [id]);

  const handleBooking = () => {
    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('numberOfTickets', numberOfTickets);
    alert(`Tickets booked for ${showDetails && showDetails.name}!`);
  };

  return (
    <div className="book-tickets-container">
      <h1>Book Tickets for {showDetails && showDetails.name}</h1>
      <form>
        <label>
          Your Name:
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          Your Email:
          <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
        </label>
        <label>
          Number of Tickets:
          <input
            type="number"
            value={numberOfTickets}
            onChange={(e) => setNumberOfTickets(e.target.value)}
            min="1"
            max="10"
          />
        </label>
        <button type="button" onClick={handleBooking}>
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookTickets;
