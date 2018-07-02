import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name:"Gagan"
    }
    console.log("Constructor");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount")
  }
  render() {
    console.log("render")
    return (
      <div className="App">
        {this.state.name}
      </div>
    );
  }
}

export default App;
