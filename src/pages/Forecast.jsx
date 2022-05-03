// CONFIG IMPORTS
import React, {useEffect, useState} from 'react';

// COMPONENTS IMPORTS
import WeatherForecastCard from '../components/WeatherForecastCard';

const Forecast = () => {
  const [weatherGeneralSituation, setWeatherGeneralSituation] = useState('');
  const [weatherForecastData, setWeatherForecastData] = useState('');

  const getWeatherForecastData = () => {
    const url = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en';

    fetch(url, {
      method: "GET",
    })
    .then(res => res.json())
    .catch(error => {
        console.error('Error:', error);
    })
    .then(response => {
        console.log(response);
        setWeatherGeneralSituation(response.generalSituation)
        setWeatherForecastData(response.weatherForecast);
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
      <div>
        <h3>General situation</h3>
        <p>{weatherGeneralSituation}</p>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4 mb-4">
        { weatherForecastData !== '' &&
          weatherForecastData.map((element) => {
            return(
              <WeatherForecastCard data={element} key={element.forecastDate}/>
            )
          })
        }
      </div>



    </div>
  );
};

export default Forecast;


