import React, { Component } from 'react';

class Child extends Component {
    render() {
        return(
            <div className="child">
                <button onClick={this.props.doWhatever}>{this.props.title}</button>
            </div>
        )

    }
}

export default Child;