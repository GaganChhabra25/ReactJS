import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles'
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "7a098f232919cd3ebf28ab39bd300bee";

class App extends Component {
  state = {
    temperature: undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }
getWeather =  (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  console.log("City = " + city);
  
  const data =  fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&appid="+API_KEY)
        .then((result) => {
        result.json().then(value => {
          if(city && country) {
            this.setState({
              temperature:value.main.temp,
              city:value.name,
              country:value.sys.country,
              humidity:value.main.humidity,
              description:value.weather[0].description,
              error:""
          })} else {
            this.setState({
              temperature: undefined,
              city:undefined,
              country:undefined,
              humidity:undefined,
              description:undefined,
              error:"Please enter valid City name"
             })
          }
     
      console.log(this.state);
      })
  });       
}

 render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-3 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
