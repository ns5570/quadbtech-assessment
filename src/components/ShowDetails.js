import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ShowDetails.css';
import BookingForm from './BookingForm'; 

const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShowDetails(data));
  }, [id]);

  const handleBookTickets = () => {
    setShowBookingForm(true);
  };

  return (
    <div className="show-details-container">
      <h1>{showDetails && showDetails.name}</h1>
      <p dangerouslySetInnerHTML={{ __html: showDetails && showDetails.summary }} />
      <button onClick={handleBookTickets}>Book Tickets</button>
      {showBookingForm && <BookingForm movieName={showDetails && showDetails.name} />}
      <Link to={`/`}>Back to Home</Link>
    </div>
  );
};

export default ShowDetails;
