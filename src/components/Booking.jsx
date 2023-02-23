import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingFlightForm from './BookingFlightForm';

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
     <div>
      <BookingFlightForm></BookingFlightForm>
        </div> 

  
    </div>
  );
}

export default Booking;

