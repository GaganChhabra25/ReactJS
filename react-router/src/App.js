import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route'

const User = (params) => {
  return(
    <h1>Welcome {params.username}</h1>
  )
}

class App extends Component {
  state = {
    loggedIn:false
  }

  loginHandle = () => {
    this.setState({
      loggedIn:true
    })
  }

  render() {
    return (
      <Router>
      <div className="App">
      <li> <NavLink activeStyle={{color:'green'}} exact to="/home">Home</NavLink> </li>
      <li> <NavLink activeStyle={{color:'green'}} exact to="/about">About</NavLink></li>
      <li> <NavLink activeStyle={{color:'green'}} exact to="/user/gagan">User Gagan</NavLink></li>
      <li> <NavLink activeStyle={{color:'green'}} exact to="/user/ankit">User Ankit</NavLink></li>
      <br/>
      <input type="button" value={this.state.loggedIn ? "logout" : "login"} onClick={this.loginHandle.bind(this)}></input>
       
        <Route path="/home" exact strict render={
          () => {
            return <h1>Welcome Home</h1>
          }
        }/>

         <Route path="/about" exact strict render={
          () => {
            return <h1>Welcome About</h1>
          }
        }/>

        <Route path="/user/:username" exact strict render={
         ({match}) =>{
          return this.state.loggedIn ? (<User username={ match.params.username}/>) : (<Redirect to="/home" exact strict/>)
         } 
        }/>

      </div>
      </Router>
    );
  }
}

export default App;
