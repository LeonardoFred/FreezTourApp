import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Booking() {
  const { id } = useParams();
  const [bookingData, setBookingData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/flightnew/${id}`);
        const data = await response.json();
        setBookingData(data);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching booking data:', error);
        setIsLoading(false);
      }
    };

    fetchBookingData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!bookingData) {
    return <p>No booking data found.</p>;
  }

  return (
    <div>
      <h1>Booking for {id}</h1>
      <p>Code: {bookingData.code}</p>
      {/* other component code */}
    </div>
  );
}

export default Booking;

/*
import { useParams } from 'react-router-dom';

function Booking() {
  const { id } = useParams();

  // use the id value in your component as needed
  return (
    <div>
      <h1>Booking for {id}</h1>
      
    </div>
  );
}

export default Booking;


*/

/*
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function Booking(props) {
   useEffect(() =>{
     fetchData();
   }, []);

   const [item, setItem] = useState({});

   const fetchData = async() => {

    const id =props.match.params.id
    const rawData = await fetch ("http://localhost:8080/api/booking/1");
    const data = await rawData.json();
    console.log(item);
    setItem(item);

   };



    return (
      <div className="container">
        <span className="section__content">Booking Section</span>
        <h1>ID: {item.id}</h1>
      </div>
    );
  }
  */
/*
  export default function Booking() {
   
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    
    console.log(id);
  
 
 
 
     return (
       <div className="container">
         <span className="section__content">Booking Section</span>
         <h1>ID:{id}</h1>
       </div>
     );
   }*/