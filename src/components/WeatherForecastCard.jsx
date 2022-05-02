import React from 'react';

const WeatherForecastCard = ({data}) => {
  const weather_icon_url = 'https://www.hko.gov.hk/images/HKOWxIconOutline/pic';
  const psr_icon_url = 'https://www.hko.gov.hk/common/images/PSR';

  return (
    <div className="weather-forecast-card">
      <div className="card-content p-3 border-radius-5">
        <h5 className="text-center">{data.forecastDate}</h5>
        <h5 className="text-center">{data.week}</h5>
        <img src={`${weather_icon_url}${data.ForecastIcon}.png` } alt="PSR icon" />

        <img src={`${psr_icon_url}${data.PSR}_50.png` } alt="PSR icon" />

      </div>
    </div>
  );
};

export default WeatherForecastCard;