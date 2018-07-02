import React, { Component } from 'react';
import Welcome from './Welcome'

class User extends Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <Welcome welcomeName  = {name}></Welcome>
      </div>
    )
  }
}

export default User;
