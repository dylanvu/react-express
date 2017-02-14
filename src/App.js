import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  callApi() {
    axios.get('api')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React-Express-Deployment</h2>
        </div>
        <button onClick={this.callApi}>Call API!</button>
      </div>
    );
  }
}

export default App;
