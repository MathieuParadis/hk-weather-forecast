// CONFIG IMPORTS
import React, {useEffect} from 'react';

const SunMoon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sun-moon">
      <h1>Sun and Moon page</h1>
    </div>
  );
};

export default SunMoon;