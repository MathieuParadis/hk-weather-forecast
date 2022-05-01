// CONFIG IMPORTS
import React, {useEffect} from 'react';

const CurrentWeather = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="current-weather">
      <h1>Current weather page</h1>
    </div>
  );
};

export default CurrentWeather;