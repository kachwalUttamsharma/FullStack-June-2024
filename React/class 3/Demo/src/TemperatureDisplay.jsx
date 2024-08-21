import React, { useState } from "react";

function TemperatureDisplay({ temperature }) {
  return (
    <div>
      <p>Temperature in Celsius: {temperature}°C</p>
      <p>
        Temperature in Fahrenheit: {((temperature * 9) / 5 + 32).toFixed(1)}°F
      </p>
    </div>
  );
}

export default TemperatureDisplay;
