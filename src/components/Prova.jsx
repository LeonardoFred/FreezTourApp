
/*

export default function About() {
  return (
    <div className="container">
      <span className="section__content">About Section</span>
    </div>
  );
}

*/

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Prova() {


  return (
    <div>
      <h2>My Route Component</h2>
      
    </div>
  );
}

export default Prova;

/*

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { isEmpty } from "lodash";

export default function About() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!isEmpty(id)) {
      fetch("http://localhost:8080/api/booking/all" + id)
        .then((response) => response.json())
        .then((responseData) => setData(responseData))
        .catch((error) => console.error(error));
    }
  }, [id]);
  if (!isEmpty(data)) {
    return (
<div>
<table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Seat Number</th>
        <th>Description</th>
		<th>Ticket Price</th>
		<th>Departure</th>
      </tr>
    </thead>
	<tbody>


			 {
				items.map((item) => (
				<tr key = { item.id } >
					<td>{ item.code }</td>
					<td>{ item.seatNumber }</td>
					<td>{ item.description }</td>
					<td>{ item.ticketPrice }</td>
					<td>{ item.flight.timeDep }</td>
					<td></td>

					
					
					
					
					</tr>
				))
			}
			</tbody>
			</table>
		</div>
	);
}


}
*/

    
    
    
    
  
