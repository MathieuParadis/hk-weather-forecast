import React from 'react';

const WeatherDistrictCard = ({data}) => {
  const replaceSpecialCharacterInString = (string) => {
    const array = string.split(" ");
    const modifiedArray = array.map((word) => word === '&amp;' ? word = '&' : word);
    return modifiedArray.join(' ')
  }

  return (
    <div className="weather-district-card d-flex justify-content-center align-items-center">
      <div className="card-content p-3 border-radius-5">
        <h5 className="text-center">{replaceSpecialCharacterInString(data.place)}</h5>

      </div>
    </div>
  );
};

export default WeatherDistrictCard;