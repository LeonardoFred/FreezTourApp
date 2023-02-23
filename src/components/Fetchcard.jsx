import React, { useState, useEffect } from 'react';
import axios from 'axios';


const FetchCard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:8080/api/tour/all'); // replace with your API endpoint that returns all tours
      setCards(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {cards.map(card => (
        <card key={card.id} id={card.id} />
      ))}
    </div>
  );
};

export default FetchCard;
