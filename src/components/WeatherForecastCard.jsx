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
    
    return day + " " + selectedMonthName.slice(0, 3)
  }

  return (
    <div className="weather-forecast-card pointer">
      <div className="card-content border-radius-5">
        <div className="d-flex flex-column justify-content-center align-items-center p-3">
          <h3 className="text-center">{formatDate(data.forecastDate)}</h3>
          <p className="text-center h5">{data.week}</p>
          <img src={`${weather_icon_url}${data.ForecastIcon}.png`} alt="weather forecast icon" className="weather-forecast-icon"/>
          <p className="h5 fw-bold">{data.forecastMintemp.value} - {data.forecastMaxtemp.value} °C</p>
          <p className="h5 fw-bold">{data.forecastMinrh.value} - {data.forecastMaxrh.value} %</p>
          <div className="temp-section d-flex align-items-center">
            <img src={`${psr_icon_url}${formatPSR(data.PSR)}_50.png`} alt="PSR icon" className="PSR-icon"/>&nbsp;&nbsp;
            <p className="m-0">{data.PSR}</p>
          </div>
        </div>
        <div className="overlay"></div>
        <div className="weather-info">
          <h3 className="text-center">{data.forecastWeather}</h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecastCard;