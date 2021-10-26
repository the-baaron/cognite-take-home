import React from "react";
import axios from "axios";

import { CountryTable } from "./components/CountryTable";
import { LanguageTable } from "./components/LanguageTable";
import { Summary } from "./components/Summary";

import "./App.css";

/**
 * Main app component
 */
function App() {
  const [countryData, setCountryData] = React.useState();

  /**
   * Retrieve the data from the API when the page loads
   */
  React.useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountryData(res.data);
    });
  }, []);

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
