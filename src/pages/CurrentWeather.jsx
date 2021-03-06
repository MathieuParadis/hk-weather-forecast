// CONFIG IMPORTS
import React, {useEffect, useState} from 'react';

// COMPONENTS IMPORTS
import WeatherDistrictCard from '../components/WeatherDistrictCard';

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState('');
  const getWeatherData = () => {
    const url = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en';
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
        setWeatherData(response);
    });
  }

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="current-weather">
      <h1>Current weather page</h1>
      {/* <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-4">
        { weatherData !== '' &&
          weatherData.rainfall.data.map((element) => {
            return(
              <WeatherDistrictCard data={element} key={element.place} />
            )
          })
        }
      </div> */}
    </div>
  );
};

export default CurrentWeather;