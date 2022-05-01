// ASSETS IMPORTS
import current_weather_icon from '../assets/logos/current_weather_icon.svg';
import forecast_icon from '../assets/logos/forecast_icon.svg';
import sun_moon_icon from '../assets/logos/sun_moon_icon.svg';
import tide_icon from '../assets/logos/tide_icon.svg';

const navMenu = {
  homepage: [
    {
      title: "Current weather",
      img: current_weather_icon,
      navlink: "/current-weather"
    },
    {
      title: "Weather forecast",
      img: forecast_icon,
      navlink: "/forecast"
    },
    {
      title: "Sunrise / Sunset times",
      img: sun_moon_icon,
      navlink: "/sun-moon-times"
    },
    {
      title: "Tide tables",
      img: tide_icon,
      navlink: "/tide-tables"
    },
  ],
};

export default navMenu;