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
            <span>Check mispelling.</span>
          </p>
        )
      }

      {props.temperature ? (
        <div>
          {props.country && props.city && (
            <p className="text-gray-100">
              <span className="font-semibold">Location: </span>
              {props.country}, {props.city}
            </p>
          )}
          {props.temperature && (
            <p className="text-gray-100">
              <span className="font-semibold">Temperature: </span>
              {props.temperature} ℃
            </p>
          )}
          {props.description && (
            <p className="text-gray-100">
              <span className="font-semibold">Description: </span>
              {props.description.charAt(0).toUpperCase() + props.description.slice(1)}
            </p>
          )}
          {props.humidity && (
            <p className="text-gray-100">
              <span className="font-semibold">Humidity:</span> {props.humidity}%
            </p>
          )}
          {props.wind_speed && (
            <p className="text-gray-100">
              <span className="font-semibold">Wind Speed:</span> {props.wind_speed} Km/h
            </p>
          )}
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
