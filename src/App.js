import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from './module/autocomplete'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Autocomplete
          placeholder="Search..."
          source={["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipisicing", "elit.", "Asperiores,",
            "fugiat", "quia", "quibusdam", "quidem", "repellendus", "sunt.", "Minima,", "nam", "pariatur!", "Adipisci",
            "at", "corporis", "fugit", "ipsam", "minima", "quibusdam", "recusandae", "sed", "soluta", "ut,", "vel!"]}
        />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
