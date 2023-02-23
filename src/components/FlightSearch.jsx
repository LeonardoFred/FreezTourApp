import React, { useState } from 'react';

function FlightSearch() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // send search request to server with form data
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="origin">Origin:</label>
      <input
        type="text"
        id="origin"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        required
      />
      
      <label htmlFor="destination">Destination:</label>
      <input
        type="text"
        id="destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        required
      />

      <label htmlFor="depart-date">Departure Date:</label>
      <input
        type="date"
        id="depart-date"
        value={departDate}
        onChange={(e) => setDepartDate(e.target.value)}
        required
      />

      <label htmlFor="return-date">Return Date:</label>
      <input
        type="date"
        id="return-date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
      />

      <label htmlFor="adults">Adults:</label>
      <input
        type="number"
        id="adults"
        value={adults}
        onChange={(e) => setAdults(parseInt(e.target.value))}
        min="1"
        max="6"
        required
      />

      <label htmlFor="children">Children:</label>
      <input
        type="number"
        id="children"
        value={children}
        onChange={(e) => setChildren(parseInt(e.target.value))}
        min="0"
        max="6"
      />

      <label htmlFor="infants">Infants:</label>
      <input
        type="number"
        id="infants"
        value={infants}
        onChange={(e) => setInfants(parseInt(e.target.value))}
        min="0"
        max="6"
      />

      <button type="submit">Search Flights</button>
    </form>
  );
}

export default FlightSearch;
