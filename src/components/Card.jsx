import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/card.css'
import { Link } from 'react-router-dom';



const Card = ({ id }) => {
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      const response = await axios.get(`http://localhost:8080/api/tour/${id}`); // replace with your API endpoint that returns tour data by id
      setTour(response.data);
    };
    fetchTour();
  }, [id]);

  if (!tour) {
    return <div>Loading...</div>;
  }

  return (
    <div className='hover-1'>
    <div >
      
      <h3 className='h3-tour'>{tour.tourName}</h3>
      <hr></hr> 
      <p>{tour.description}</p>
      <p><b>Price: {tour.tourPrice} $</b></p>
      <hr></hr> 
      <div className='div-button'>
      <Link to={`/items/${id}`}><button className='button'>Book now!</button></Link></div>

     
    
    
          </div>
          </div>
    
    
  );
};

export default Card;
