import React, { Component } from 'react';
import Student from './Student';

class Students extends Component {
    state = {
        users:[
            {name:"Gagan", age:27},
            {name:"Ankit", age:28},
            {name:"Schenider", age:29},
        ],
        title:"Students List"
    };
    
    makeMeYounger = () => {
      /*   const newState = this.state.users.map((user) => {
            const tempUser = user;
            tempUser.age-=10;
            return tempUser;
        });
         */
        this.setState({
            /* newState */
            users:[
                {name:"Gagan", age:17},
                {name:"Ankit", age:18},
                {name:"Schenider", age:19},
            ]
        })
    }
    
    render() {
        return(
            <div className="Students">
                <h1>{this.state.title}</h1>
                {
                    this.state.users.map((user) => {
                       return <Student age={user.age}>{user.name}</Student>
                    })
                }
                <button onClick={this.makeMeYounger}>Make Me 10 years Younger</button>
            </div>
        );
    }

}

export default Students;