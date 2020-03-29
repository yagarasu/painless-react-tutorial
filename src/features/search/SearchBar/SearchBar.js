import React, { useState } from 'react';
import './SearchBar.css';
import countries from '../../flag-emojis-by-code.json';

function SearchBar ({
  onSubmit = () => {},
  disabled = false
}) {
  const [query, setQuery] = useState('')
  const [country, setCountry] = useState('')
  const hndQueryChange = e => setQuery(e.target.value)
  const hndCountryChange = e => setCountry(e.target.value)
  const hndSubmit = () => onSubmit({ query, country })
  return (
    <div id="search">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        onChange={hndQueryChange}
        value={query}
        disabled={disabled}
      />
      <select
        className="search-country"
        onChange={hndCountryChange}
        value={country}
        disabled={disabled}
      >
        <option value="">Select</option>
        {Object.keys(countries).map(key => {
          const country = countries[key]
          return <option value={key} key={key}>{country.emoji} {country.name}</option>
        })}
      </select>
      <button className="search-button" onClick={hndSubmit} disabled={disabled}>
        Search
      </button>
    </div>
  );
}

export default SearchBar
