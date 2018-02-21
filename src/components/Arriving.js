import React, { Component } from "react";
import $ from "jquery";
import axios from 'axios';

class Arriving extends Component {
    constructor() {
        super();
        this.state = {
            searchQuery: '',
            trains: [] 
        }  
      }  
      componentWillMount() {
        this.getTrains();
    }

    getTrains() {
        axios.get(`https://rata.digitraffic.fi/api/v1/live-trains/station/TPE?arrived_trains=0&arriving_trains=10&departed_trains=0&departing_trains=0&include_nonstopping=false`)
          .then(response => {
              this.setState({trains: response.data}, () => {
                  console.log(this.state);
              })
          })
    }
    
   
    render(){
      
        const trainItems = this.state.trains.map((train, i) => {  
            return(
                <div>          
                <td key={train.trainNumber} className="numberList">{train.trainNumber}</td>
                <td className="departingStationList">{train.timeTableRows[0].stationShortCode}</td> 
                <td className="laststationList">{train.timeTableRows[train.timeTableRows.length-1].stationShortCode}</td>         
                </div>
                
            )
        })
        return (        
          <div>
          <table className="trains">
              <tr>
              <th>Juna</th>
              <th>Lähtöasema</th>
              <th>Pääteasema</th>    
              </tr>
              {trainItems}
          </table>    
          </div>
          
      )
  }
}


       

export default Arriving;