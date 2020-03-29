import React from 'react';
import './SearchResults.css';
import countries from '../../flag-emojis-by-code.json';

function SearchResults ({
  data = []
}) {
  const getFlag = code => {
    const country = countries[code]
    return country ? country.emoji : '❔'
  }
  if (data.length === 0) return (
    <div>
      <p>No results found <span role="img" aria-label="Uh?">🤔</span></p>
    </div>
  )
  return (
    <ul id="results">
      {data.map(({ name, country, alpha_two_code: code, web_pages }, i) => (
        <li className="result" key={name + code + i}>
          <h2>{name} {getFlag(code)} ({country})</h2>
          {web_pages.map(web => (
            <a href={web} target="_blank" key={web} rel="noopener noreferrer">{web}</a>
          ))}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
