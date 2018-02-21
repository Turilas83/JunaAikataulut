import React, { Component } from "react";
import $ from "jquery";
import axios from 'axios';


class Departing extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.fetchArriving = this.fetchArriving.bind(this);
    this.state = {
        trains: [],
        searchQuery: '',
        
    };
  }

  handleChange(event) {
    this.setState({
    searchQuery: event.target.value
  });
  }
  componentWillMount() {
    this.fetchArriving();
}
  
 

fetchArriving() {
  console.log('fetching...');
  axios.get(`https://rata.digitraffic.fi/api/v1/live-trains/station/TPE?arrived_trains=0&arriving_trains=10&departed_trains=0&departing_trains=0&include_nonstopping=false`)
    .then(result => {
      this.setState({trains: result.data}, () => {
      console.log(this.state);
    })
    })
  }


 render() {
 
  const trainItems = this.state.trains.map((train, i) => {
    var time = document.getElementsByClassName("TPE");
      return(
          <div>          
          <td key={train.trainNumber} className="numberList">{train.trainNumber}</td>
          <td className="departingStationList">{train.timeTableRows[0].stationShortCode}</td> 
          <td className="laststationList">{train.timeTableRows[train.timeTableRows.length-1].stationShortCode}</td>
          <td className="arrivingTime">{time.stationShortCode}</td>          
          </div>
          
      )
  })
  return (
    <div>
       <table>
          <thead>
            <tr>
              <th>Juna</th>
              <th>Lähtöasema</th>
              <th>Pääteasema</th>
            </tr>
          </thead>
          <tbody>{trainItems}</tbody>
        </table>
    </div>

  )
  

    
  }
}



export default Departing;