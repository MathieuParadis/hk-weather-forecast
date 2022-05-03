// CONFIG IMPORTS
import React, {useEffect, useState} from 'react';

// PAPAPARSE IMPORT
import Papa from 'papaparse';

// COMPONENTS IMPORTS
import SunChart  from '../components/SunChart';

const SunMoon = () => {
  const [parsedSunCsvData, setParsedSunCsvData] = useState(null);

  const parseFile = (file) => {
    fetch(file)
    .then(response => response.text())
    .then(response => {
      let data = Papa.parse(response);
      const obj = []

      data.data.shift();
      data.data.map((el) => {
        const objEntry = {
          "date": el[0],
          "rise": el[1],
          "tran": el[2],
          "set": el[3],
        }

        obj.push(objEntry);
      })

      setParsedSunCsvData(obj);
    });
  }

  parseFile('Sun_rise_set_2018.csv');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sun-moon">
      <h1>Sun and Moon page</h1>

    {
      parsedSunCsvData && 
      <SunChart sunData={parsedSunCsvData} />
    }
       
    </div>
  );
};

export default SunMoon;