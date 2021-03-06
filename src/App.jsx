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
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${inicial}&appid=${process.env.REACT_APP_KEY}&units=metric`;
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);

    if (!data.message) {
      this.setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        icon: data.weather[0].icon,

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
      <main
        className={`h-screen flex flex-col items-center  ${
          this.state.temperature >= 18 ? "warm-gradient " : "cold-gradient "
        }`}
      >
        <div
          className={`my-3 py-5 px-10 rounded-xl ${
            this.state.temperature >= 18 ? "bg-yellow-800" : "bg-indigo-800"
          }`}
        >
          <h1
            className={`text-2xl font-bold text-center mb-5 ${
              this.state.temperature >= 18 ? "text-blue-500" : "text-yellow-400"
            }`}
          >
            Weather App
          </h1>
          <Formulario onSubmit={this.onSubmit} temperature={this.state.temperature} />
          <Info {...this.state} />
        </div>
      </main>
    );
  }
}

export default App;
