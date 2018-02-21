import React, { Component } from 'react';
import '../styles/App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Arriving from "./Arriving";
import Departing from "./Departing";



class Main extends Component {
  
  render() {
    return (
      <main>
      <HashRouter>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Aseman junatiedot</h1>
        </header>
        <ul className="header">
            <li><NavLink to="/saapuvat">Saapuvat</NavLink></li>
            <li><NavLink to="/lahtevat">Lähtevät</NavLink></li>
        </ul>
        <div className="content">
            <Route path="/saapuvat" component={Arriving}/>
            <Route path="/lahtevat" component={Departing}/>
        </div>  
      </div>
      </HashRouter>
      </main>
    );
    }
}


export default Main;
