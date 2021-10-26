import React from 'react';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

/**
 * Main CountryTable component
 */
export default ({ countryData }) => {
  const inputEl = React.useRef(null);
  const [filteredCountryData, setFilteredCountryData] = React.useState(countryData);
  const [sortSettings, setSortSettings] = React.useState({
    category: 'name',
    order: 'asc',
  });

  /**
 * Converts Square Kilometers to Square Miles
 * 1 KM2 = 0.386102 Miles2
 */
  const KmtoMile = (squareKM) => Math.round(squareKM / 0.386102);

  /**
   * The sorting function that sorts by the selected category, asc or desc
   */
  const sortFn = (aTmp, bTmp) => {
    const { category } = sortSettings;
    const a = sortSettings.order === 'asc' ? aTmp[category] : bTmp[category];
    const b = sortSettings.order === 'asc' ? bTmp[category] : aTmp[category];

    // If a is a string, we assume that b is a string too
    if (typeof a === 'string') return a.localeCompare(b);

    // Otherwise, it's a number
    return a - b;
  };

  /**
   * Filters countries based on name or region
   */
  const handleSearchInput = () => {
    const inputValue = inputEl.current.value.toLowerCase();
    setFilteredCountryData(
      countryData
        .filter(
          (data) => data.name.toLowerCase().includes(inputValue)
            || data.region.toLowerCase().includes(inputValue),
        )
        .sort(sortFn),
    );
  };

  /**
   * The actual sorting function
   */
  const handleSortClick = (category) => {
    // If the category doesn't change, switch order
    if (category === sortSettings.category) {
      setSortSettings({
        category,
        order: sortSettings.order === 'asc' ? 'desc' : 'asc',
      });
    } else {
      setSortSettings({
        category,
        order: 'asc',
      });
    }
  };

  return (
    <>
      <input
        ref={inputEl}
        onChange={handleSearchInput}
        placeholder="Search for coutries or regions..."
      />

      <table>
        <thead>
          <tr>
            <th />
            <th onClick={() => handleSortClick('name')}>Name</th>
            <th onClick={() => handleSortClick('region')}>Region</th>
            <th onClick={() => handleSortClick('area')}>Area</th>
            <th onClick={() => handleSortClick('population')}>Population</th>
          </tr>
        </thead>

        <tbody>
          {filteredCountryData.sort(sortFn).map((country) => (
            <tr key={country.alpha2Code}>
              <td>{getUnicodeFlagIcon(country.alpha2Code)}</td>
              <td>{country.name}</td>
              <td>{country.region}</td>
              <td>
                {country.area ? (
                  <>
                    <strong>{KmtoMile(country.area)}</strong> square miles
                  </>
                ) : (
                  <em>Unknown</em>
                )}
              </td>
              <td>
                <strong>{Math.round(country.population / 100000) / 10}</strong> milion
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
