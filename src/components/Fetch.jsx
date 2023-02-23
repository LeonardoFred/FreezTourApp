import React from "react";
import { Link } from 'react-router-dom'; 
import './styles/Fetch.css';

class Fetch extends React.Component {
	

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		
			
		};
	}




	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("http://localhost:8080/api/flightnew/all")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleases wait some time.... </h1> </div> ;

		return (
		<div className = "section_fetch">
			<table>
    <thead>
      <tr>
	    <th>Code</th>
        <th>Departure Time</th>
        <th>Arrival Time</th>
        <th>Departure Airport</th>
		<th>Arrival Airport</th>
		<th>Ticket Price $</th>
      </tr>
    </thead>
	<tbody>


			 {
				items.map((item) => (
				<tr key = {item.id} >
					<td>{item.code}</td>
					<td>{item.timeDep}</td>
					<td>{item.timeArr}</td>
					<td>{item.depAirport}</td>
					<td>{item.arrAirport}</td>
					<td>{item.ticketPrice}</td>
					<td><div><Link to={`/${item.id}`}><button>Book now!</button></Link>
					
    </div></td>

					
					
					
					
					</tr>
				))
			}
			</tbody>
			</table>
		</div>
	);
}


}




export default Fetch;
