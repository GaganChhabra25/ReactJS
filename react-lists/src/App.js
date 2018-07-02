import React, { Component } from 'react';
import './App.css';
import User from './components/User'


class App extends Component {
  state ={
    users:[
      {id:1, name:"Gagan", age:27},
      {id:2, name:"Ankit", age:29},
      {id:3, name:"Aashish", age:28},
    ]
  }

  deleteUser = (id, e) => {
    const users = Object.assign([], this.state.users)
    users.splice(id, 1)
    this.setState({
      users:users
    })
  }

  changeUserName = (id, event) => {
      const index = this.state.users.findIndex((user) => {
        return user.id === id;
      })
      
      const user = Object.assign({}, this.state.users[index]);
      user.name = event.target.value;

      const users = Object.assign([], this.state.users)
      users[index] = user;
      this.setState({
        users:users
      })
  }

  render() {
    return (
      <div className="App">
        <ul>
         {
           this.state.users.map((user, key) => {
             return (
              <User 
              age={user.age} 
              key={user.id}
              deleteEvent={this.deleteUser.bind(this, key)}
              changeEvent={this.changeUserName.bind(this, user.id)}>
              {user.name}</User>
             )
           })
         }
        </ul>
      </div>
    );
  }
}

export default App;
