import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from './module/autocomplete'

function filterResponse(res){
  return res.data.items.map(i => i.full_name)
}
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
    this.setOption = this.setOption.bind(this)
  }
  setOption(value){
    this.setState({value})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h2>{this.state.value}</h2>
        <Autocomplete
          filterResponse={filterResponse}
          url="https://api.github.com/search/repositories"
          method="GET"
          setOption={this.setOption}
          value={this.state.value}
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
