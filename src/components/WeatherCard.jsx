import React from 'react';

const WeatherCard = ({data}) => {
  const replaceSpecialCharacterInString = (string) => {
    const array = string.split(" ");
    const modifiedArray = array.map((word) => word === '&amp;' ? word = '&' : word);
    return modifiedArray.join(' ')
  }

  return (
    <div className="weather-card">
      <h4>{replaceSpecialCharacterInString(data.place)}</h4>

    </div>
  );
};

export default WeatherCard;