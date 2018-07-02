import React, { Component } from 'react';
import './App.css';

class App extends Component {

  onClick = () => {
    alert("User " + this.firstname.value + " submitted successfully" )
  }

  onKeyUp = (target, e) => {
   if(e.keyCode === 13) {
    switch(target) {
      case 'firstName': this.lastName.focus(); break;
      case 'lastName': this.age.focus(); break;
      case 'age': this.submit.focus();break;
      default: this.firstname.focus();break;
    } 
   }
  }
  render() {
    return (
      <div className="App">
        <div>
          <span>First Name : </span>
          <input 
            type="text"
            ref={(input) => {this.firstname = input}}
            onKeyUp={this.onKeyUp.bind(this, "firstName")} ></input>
        </div>

        <div>
          <span>Last Name : </span>
          <input 
            type="text"
            ref={(input) => {this.lastName = input}} 
            onKeyUp={this.onKeyUp.bind(this, "lastName")}></input>
        </div>

        <div>
          <span>Age : </span>
          <input 
            type="text"
            ref={(input) => {this.age = input}} 
            onKeyUp={this.onKeyUp.bind(this, "age")}></input>
        </div>

        <div>
          <input type="submit" 
                 value="Submit" onClick={this.onClick}
                 ref={(input) => {this.submit = input}}>
          </input>
        </div>
      </div>
    );
  }
}

export default App;
