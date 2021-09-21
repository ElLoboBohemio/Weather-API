import React, { Component } from "react";
import Formulario from "./components/Formulario";
import Info from "./components/Info";

class App extends Component {
  state = {
    temperature: "",
    description: "",
    humidity: "",
    wind_speed: 0,
    city: "",
    country: "",
    error: null,
  };

  onSubmit = async (e) => {
    //Obtiene el valor del Input
    const ciudad = e.Ciudad;
    const inicial = e.Iniciales;

    //API
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${inicial}&appid=${window.env.KEY}&units=metric`;
    const res = await fetch(API_URL);
    const data = await res.json();

    if (!data.message) {
      this.setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,

        error: "",
      });
    } else {
      this.setState({
        error: data.message,

        temperature: "",
        description: "",
        humidity: "",
        wind_speed: "",
        city: "",
        country: "",
      });
    }
  };

  render() {
    return (
      <>
        <h1>Weather App</h1>
        <Formulario onSubmit={this.onSubmit} />
        <Info {...this.state} />
      </>
    );
  }
}

export default App;
