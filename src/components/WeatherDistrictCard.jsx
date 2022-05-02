import React from 'react';

const WeatherDistrictCard = ({data}) => {
  const replaceSpecialCharacterInString = (string) => {
    const array = string.split(" ");
    const modifiedArray = array.map((word) => word === '&amp;' ? word = '&' : word);
    return modifiedArray.join(' ')
  }

  return (
    <div className="weather-district-card">
      <h4>{replaceSpecialCharacterInString(data.place)}</h4>

    </div>
  );
};

export default WeatherDistrictCard;