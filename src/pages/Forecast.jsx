// CONFIG IMPORTS
import React, {useEffect, useState} from 'react';

const Forecast = () => {
  const [weatherForecastData, setWeatherForecastData] = useState('');
  const getWeatherForecastData = () => {
    const url = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en';
    const icon_url = 'https://www.hko.gov.hk/images/HKOWxIconOutline/pic53.png';

    fetch(url, {
      method: "GET",
    })
    .then(res => res.json())
    .catch(error => {
        console.error('Error:', error);
    })
    .then(response => {
        console.log(response);
        setWeatherForecastData(response);
    });
  }

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getWeatherForecastData();
  }, []);

  return (
    <div className="forecast">
      <h1>Forecast page</h1>
    </div>
  );
};

export default Forecast;


