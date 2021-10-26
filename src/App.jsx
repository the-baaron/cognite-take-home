/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';

import CountryTable from './components/CountryTable';
import LanguageTable from './components/LanguageTable';
import Summary from './components/Summary';

import './App.css';

/**
 * Converts Square Kilometers to Square Miles
 * 1 KM2 = 0.386102 Miles2
 */
const KmtoMile = (squareKM) => Math.round(squareKM / 0.386102);

/**
 * Main app component
 */
function App() {
  const [countryData, setCountryData] = React.useState();

  /**
   * Retrieve the data from the API when the page loads
   */
  React.useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then((res) => {
      setCountryData(res.data);
    });
  }, []);

  const getAveragePopulation = (arr) => {
    return Math.round(arr.reduce((acc, val) => acc + (val.population / arr.length), 0));
  };

  /**
   * Retrieves the country with the biggest area
   */
  const getBiggestCountry = () => {
    return countryData
      .filter(({ area }) => area)
      .reduce((max, obj) => ((max.area > obj.area) ? max : obj));
  };

  /**
   * Retrieves the country with the biggest area (duplicate code 🥳)
   */
  const getSmallestCountry = () => {
    return countryData
      .filter(({ area }) => area)
      .reduce((max, obj) => ((max.area < obj.area) ? max : obj));
  };

  return (
    <div className="App">
      {countryData ? (
        <>
          <CountryTable countryData={countryData} />
          <LanguageTable countryData={countryData} />
          <Summary countryData={countryData} />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
