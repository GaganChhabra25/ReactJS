import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    name:"Gagan"
  };

  changeState = (newValue) => {
    this.setState({
      name:newValue
    })
  };

  changeNameFromInput = (event) => {
    this.setState({
      name:event.target.value
    })
  };

  render() {
    return (
      <div className="App">
      <div className="name">{this.state.name}</div>
      <br/>

      <button onClick={
        () => {this.changeState("Ankit :(")}
        }
        >Change State using anonymous function</button>

        <button onClick={this.changeState.bind(this, "Aashish :)")}>Change State using bind function</button>

        <br/>
        <input type="text" onChange={this.changeNameFromInput} defaultValue={this.state.name}></input>

      </div>
    );
  }
}

export default App;
