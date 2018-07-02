import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Test = (props) => {
  return(
    <div>
    <h1>{props.str}</h1>
    <h1>{props.bool ? ("Boolean") : ("No boolean")}</h1>
    <h1>{props.strOrNumber}</h1>
    <div>
    {
        props.array.map((value) => {
          return(<li key={value}>{value}</li>)
        })
    }
    </div>
     <div>
    {
        props.objects.map((object) => {
          return(<li key={object.roll}>{object.name}</li>)
        })
    }
    </div>
    </div>
  )
}

Test.propTypes = {
  str:PropTypes.string,
  bool:PropTypes.bool,
  strOrNumber:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  array:PropTypes.arrayOf(PropTypes.number),
  objects:PropTypes.arrayOf(PropTypes.shape(
    {
      name:PropTypes.string,
      roll:PropTypes.number
    }
  ))
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Test str="Gagan" 
        bool={false} 
        strOrNumber="String" 
        array={[0,1,2,3]} 
        objects={[
          {name:"a", roll:1},
          {name:"b", roll:2}
        ]}
        
        />
      </div>
    );
  }
}

export default App;
