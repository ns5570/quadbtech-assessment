import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ShowDetails from './components/ShowDetails';
import BookTickets from './components/BookTickets';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Create an App.css file for global styles

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="/book/:id" element={<BookTickets />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
