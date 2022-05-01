// CONFIG IMPORTS
import React, {useEffect} from 'react';

const Forecast = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="forecast">
      <h1>Forecast page</h1>
    </div>
  );
};

export default Forecast;