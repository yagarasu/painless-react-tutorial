import React from 'react';
import './App.css';
import SearchBar from 'features/search/SearchBar/SearchBar';
import SearchResults from 'features/search/SearchResults/SearchResults';
import useSearch from 'features/search/useSearch'

function App() {
  const {
    fetchData,
    busy,
    data,
    error
  } = useSearch()
  const hndSubmit = ({ query, country }) => fetchData(query, country)
  return (
    <div className="App">
      <header>
        <h1>Universearch</h1>
      </header>
      <SearchBar onSubmit={hndSubmit} disabled={busy} />
      {busy ? (
        <p>Loading...</p>
      ) : error ? (
          <p>Error! {error}</p>
        ) : (
          <SearchResults data={data} />
        )
      }
    </div>
  );
}

export default App;
