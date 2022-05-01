// CONFIG IMPORTS
import React, {useEffect} from 'react';

const Tidal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tidal">
      <h1>Tidal page</h1>
    </div>
  );
};

export default Tidal;