import React, { Component } from 'react';
import './App.css';
import Parent from './components/parentToChild/Parent';

class App extends Component {
  state = {
    title:"Title !"
  }

  changeTheWorld = (newTitle) => {
    this.setState({
      title:newTitle
    })
  }
  render() {
    return (
      <div className="App">
        <Parent title={this.state.title} doWhatever={this.changeTheWorld.bind(this, "new Title")}></Parent>
      </div>
    );
  }
}

export default App;
