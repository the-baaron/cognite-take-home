import React from 'react';

const Summary = ({ countryData }) => {
  const getAveragePopulation = (arr) => {
    return Math.round(arr.reduce((acc, val) => acc + (val.population / arr.length), 0));
  };

  const getBiggestCountry = () => {
    return countryData
      .filter(({ area }) => area)
      .reduce((max, obj) => ((max.area > obj.area) ? max : obj));
  };

  // Bit of duplicate code here :D
  const getSmallestCountry = () => {
    return countryData
      .filter(({ area }) => area)
      .reduce((max, obj) => ((max.area < obj.area) ? max : obj));
  };

  return (
    <>
      <p>
        Average population per country: <strong>{getAveragePopulation(countryData)}</strong>
      </p>

      <p>
        Biggest country: <strong>{getBiggestCountry().name}</strong>
      </p>

      <p>
        Smallest country: <strong>{getSmallestCountry().name}</strong>
      </p>
    </>
  );
};

export default Summary;
