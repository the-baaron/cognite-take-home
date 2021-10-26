import React from "react";

export const LanguageTable = ({ countryData }) => {
  const [languages, setLanguages] = React.useState({});

  React.useEffect(() => {
    const newLanguages = {};

    // Pretty ugly, but running out of time :)
    countryData.forEach((country) => {
      country.languages.forEach((language) => {
        newLanguages[language.name] = [
          ...(newLanguages[language.name] || []),
          country.name,
        ];
      });
    });

    setLanguages(newLanguages);
  }, [countryData]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Language</th>
            <th>Countries</th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(languages).map(([language, countries]) => {
            return (
              <tr key={language}>
                <td>
                  <strong>{language}</strong>
                </td>
                <td>{countries.join(", ")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
