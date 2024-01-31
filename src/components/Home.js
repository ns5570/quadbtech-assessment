import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
   
    const fetchShows = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

   
    const fetchAllShows = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    
    if (searchTerm.trim() === '') {
      fetchAllShows();
    } else {
      fetchShows();
    }
  }, [searchTerm]);

  return (
    <div className="home-container">
      <h1>Show List</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by show name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul>
        {shows.map((show) => (
          <li key={show.show.id}>
            <div className="show-card">
              <img src={show.show.image?.medium} alt={show.show.name} />
              <h3>{show.show.name}</h3>
              <p>{show.show.summary}</p>
              <Link to={`/show/${show.show.id}`}>Show Details</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
