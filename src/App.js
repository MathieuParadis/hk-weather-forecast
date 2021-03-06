// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGE IMPORTS
import CurrentWeather from './pages/CurrentWeather';
import Forecast from './pages/Forecast';
import Home from './pages/Home';
import SunMoon from './pages/SunMoon';
import Tidal from './pages/Tidal';

// COMPONENT IMPORTS
import Navigation from './components/Navigation';
import NavigationMobile from './components/NavigationMobile';

const App = () => {

  return (
    <div className="App">
      <Router>
      <Navigation />
      <NavigationMobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/current-weather" exact="true" element={<CurrentWeather />} />
          <Route path="/forecast" exact="true" element={<Forecast />} />
          <Route path="/sun-moon-charts" exact="true" element={<SunMoon />} />
          <Route path="/tide-tables" exact="true" element={<Tidal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
