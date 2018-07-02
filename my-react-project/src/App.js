import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Dummy from './components/Dummy';
import Students from './components/Students';

class App extends Component {
  
  render() {
    const name  = "Gagan Chhabra";
    return (
     <div className="main"> 
{/*         <div>
          <Dummy/>
        </div>
        <div>
            <User name = {name}></User>
        </div> */}
            <Students name = {name}></Students>
      </div>
    );
  }
}

export default App;
