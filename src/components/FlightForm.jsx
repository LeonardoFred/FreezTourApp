import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './styles/flightform.css'


function FlightForm() {
  const [depAirport, setDepAirport] = useState("");
  const [arrAirport, setArrAirport] = useState("");
  const [flights, setFlights] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const airports = [
    { value: "New York JFK", label: "New York JFK" },
    { value: "Greenland Airport", label: "Greenland Airport" },
    { value: "ORD", label: "O'Hare International Airport" },
    { value: "DFW", label: "Dallas/Fort Worth International Airport" },
    { value: "LHR", label: "Heathrow Airport" },
    { value: "CDG", label: "Charles de Gaulle Airport" },
    { value: "FRA", label: "Frankfurt Airport" },
    { value: "PEK", label: "Beijing Capital International Airport" },
  ];


  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:8080/api/flightnew?depAirport=${depAirport}&arrAirport=${arrAirport}`);
    const data = await response.json();
    setFlights(data);
    setShowTable(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flightform">
        <label>
          Departure Airport
          <select value={depAirport} onChange={(event) => setDepAirport(event.target.value)} className="select-form">
            <option value="">Select an airport</option>
            {airports.map((airport) => (
              <option key={airport.value} value={airport.value}>{airport.label}</option>
            ))}
          </select>
        </label>
        
        <label>
          Arrival Airport
          <select value={arrAirport} onChange={(event) => setArrAirport(event.target.value)} className="select-form">
            <option value="">Select an airport</option>
            {airports.map((airport) => (
              <option key={airport.value} value={airport.value}>{airport.label}</option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit" className='button-20'>Search</button>
      </form>
      {showTable && (
        <div className='table-flight'>
            <table>
          <thead>
            <tr>
              <th className='td-voices'>Code Flight</th> 
              <th className='td-voices'>Departure Time</th>
              <th className='td-voices'>Arrival Time</th>
              <th className='td-voices'>Departure Airport</th>
              <th className='td-voices'>Arrival Airport</th>
              <th className='td-voices'>Ticket Price</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight.id}>
                <td>{flight.code}</td>
                <td>{flight.timeDep}</td>
                <td>{flight.timeArr}</td>
                <td>{flight.depAirport}</td>
                <td>{flight.arrAirport}</td>
                <td>{flight.ticketPrice}</td>
                <td><div><Link to={`/booking/${flight.id}`}><button className="button-20">Book now!</button></Link>
					
                    </div></td>
                
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
}

export default FlightForm;
