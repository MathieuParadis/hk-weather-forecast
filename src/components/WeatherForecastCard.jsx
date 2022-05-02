// CONFIG IMPORTS
import React from 'react';

// ASSETS IMPORTS
import temp_icon from '../assets/logos/temperature_icon.svg';;

const WeatherForecastCard = ({data}) => {
  const weather_icon_url = 'https://www.hko.gov.hk/images/HKOWxIconOutline/pic';
  const psr_icon_url = 'https://www.hko.gov.hk/common/images/PSR';

  const url = "https://www.hko.gov.hk/textonly/v2/explain/wxicon_e.htm";

  const formatPSR = (string) => {
    const array = string.split(" ");
    return array.join('')
  }


  return (
    <div className="weather-forecast-card">
      <div className="card-content d-flex flex-column justify-content-center align-items-center p-2 border-radius-5">
        <h5 className="text-center">{data.forecastDate}</h5>
        <h5 className="text-center">{data.week}</h5>
        <img src={`${weather_icon_url}${data.ForecastIcon}.png`} alt="weather forecast icon" className="weather-forecast-icon"/>
        <div className="temp-section d-flex align-items-center">
          <img src={temp_icon} alt="temperature icon" className="temperature-icon"/>
          <p className="m-0">{data.forecastMintemp.value} - {data.forecastMaxtemp.value} C</p>
        </div>
        <p>Humidity: {data.forecastMinrh.value} - {data.forecastMaxrh.value}</p>
        <img src={`${psr_icon_url}${formatPSR(data.PSR)}_50.png`} alt="PSR icon" className="PSR-icon"/>
        <p>{data.PSR}</p>

      </div>
    </div>
  );
};

export default WeatherForecastCard;