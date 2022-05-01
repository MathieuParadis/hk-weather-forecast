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
  rulespage: [
    {
      description: "Helping Hand is a local charity that does not aim to make money. Subscribing to our app as well as using our service is and will remain free.",
    },
    {
      description: "Volunteers cannot ask for money or donations. Offering your time to help others means, you shares core values with us, such as generosity, love and respect, that are beyond money.",
    },
    {
      description: "If you want to help but are concerned of not being able to help, do not worry. There is always a way. Contact the person in need and engage the conversation to figure out a solution.",
    },
    {
      description: "If you want to give back to the community, but are unable to do so, we encourage you to donate to your local associations or charitities such as the Red Cross.",
    },
    {
      description: "To ensure the safety of all our users, we verify the identity of all our applicants.",
    },
    {
      description: "Once signed in, the user sees a map centered at its current location. Markers on the map indicate people in need of help.",
    },
    {
      description: "Markers are of 2 different colors to refers to the 2 types of help: material and service.",
    },
    {
      description: "When volunteering to a request posted by another user, the volunteer is sent to the chat page where he/she can send a message to the requester directly on the platform. The requester and the volunteer can communicate this way to organize the fulfillment of the need.",
    },
    {
      description: "While asking for help, well defined your need in advance. Anyone volunteering to help you has to understand exactly what the request is about.",
    },
    {
      description: "Once 5 separate users have clicked on the fulfillment button and sent messages to the requester, the need is no longer displayed on the site.",
    },
    {
      description: "Receiving help is an active job. Be proactive, participate and help the volunteer(s) in every way possible.",
    },
    {
      description: "If, within 24 hours, the request still hasn't been marked as fulfilled, the requester can republish it. However, if either party marks the request as fulfilled, it cannot be republished.",
    },
    {
      description: "Remember, be patient! We are all human beings. All volunteers genuinely want to help but not everyone contacting you might be able to do so.",
    },
    {
      description: "The safety of our users is our top priority. Aggresive and dangerous behaviors are not tolerated. Offenders will be reported and banned.",
    },
  ],

};

export default navMenu;