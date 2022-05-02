// CONFIG IMPORTS
import React from 'react';

const WeatherForecastCard = ({data}) => {
  const weather_icon_url = 'https://www.hko.gov.hk/images/HKOWxIconOutline/pic';
  const psr_icon_url = 'https://www.hko.gov.hk/common/images/PSR';

  const url = "https://www.hko.gov.hk/textonly/v2/explain/wxicon_e.htm";

  const formatPSR = (string) => {
    const array = string.split(' ');
    return array.join('')
  }

  const formatDate = (date) => {
    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    const month = date[4] + date[5];
    const selectedMonthName = months[parseInt(month) - 1];
    const day = date[6] + date[7];
    
    return day + " " + selectedMonthName
  }

  return (
    <div className="weather-forecast-card">
      <div className="card-content d-flex flex-column justify-content-center align-items-center p-3 border-radius-5">
        <h5 className="text-center">{formatDate(data.forecastDate)}</h5>
        <h5 className="text-center">{data.week}</h5>
        <img src={`${weather_icon_url}${data.ForecastIcon}.png`} alt="weather forecast icon" className="weather-forecast-icon"/>
        <p>{data.forecastMintemp.value} - {data.forecastMaxtemp.value} °C</p>
        <p>{data.forecastMinrh.value} - {data.forecastMaxrh.value} %</p>
        <div className="temp-section d-flex align-items-center">
          <img src={`${psr_icon_url}${formatPSR(data.PSR)}_50.png`} alt="PSR icon" className="PSR-icon"/>
          <p className="m-0">{data.PSR}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecastCard;