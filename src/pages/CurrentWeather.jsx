// CONFIG IMPORTS
import React, {useEffect, useState} from 'react';

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

  const replaceSpecialCharacterInString = (string) => {
    const array = string.split(" ");
    const modifiedArray = array.map((word) => word === '&amp;' ? word = '&' : word);
    return modifiedArray.join(' ')
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

      <div className="row row-cols-2 row-cols-md-4 g-4 mb-4">

        { weatherData !== '' &&
          weatherData.rainfall.data.map((element) => {
            return(
              <div>
                <h4>{replaceSpecialCharacterInString(element.place)}</h4>
              </div>
            )
          })
        }


      </div>



    </div>
  );
};

export default CurrentWeather;