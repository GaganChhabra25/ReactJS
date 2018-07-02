import React, { Component } from 'react';

class Dummy extends Component {

    constructor() {
        super();
        this.state = {name:"Gagan"};
    }

    render() {
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

export default Dummy;