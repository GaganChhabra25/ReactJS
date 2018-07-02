import React, { Component } from 'react';

class User extends Component {
    render() {
        return(
            <li>
                name: {this.props.children} | age: {this.props.age}
                <input type="text" onChange={this.props.changeEvent} defaultValue={this.props.children}></input>
                <button onClick={this.props.deleteEvent}>Delete</button>
            </li>
        )
    }

}

export default User;