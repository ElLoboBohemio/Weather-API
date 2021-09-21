import React from "react";

const Info = (props) => {
  return (
    <div>
      {
        //IF Error
        props.error && (
          <p>
            {props.error.charAt(0).toUpperCase() + props.error.slice(1)} : ( <br />
            <br />
            <span>Check "City Name" and "State Code" are written correctly.</span>
          </p>
        )
      }

      {props.temperature ? (
        <div>
          {props.country && props.city && (
            <p>
              Location: {props.country}, {props.city}
            </p>
          )}
          {props.temperature && <p>Temperature: {props.temperature} ℃</p>}
          {props.description && <p>Description: {props.description}</p>}
          {props.humidity && <p>Humidity: {props.humidity}%</p>}
          {props.wind_speed && <p>Wind Speed: {props.wind_speed} Km/h</p>}
        </div>
      ) : (
        <div>
          <i></i>
        </div>
      )}
    </div>
  );
};

export default Info;
