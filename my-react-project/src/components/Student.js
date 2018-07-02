import React, { Component } from 'react';

class Student extends Component {
    render() {
        return(
            <div className="Student">
                <h4>Name: {this.props.name} | Age: {this.props.age}</h4>
            </div>
        );
    }
}

export default Student;