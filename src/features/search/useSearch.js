import { useState } from 'react';
import API from 'services/API'

function useSearch() {
  const [busy, setBusy] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const fetchData = async (query, country) => {
    setBusy(true)
    try {
      const result = await API.fetch(query, country)
      setData(result)
      setError(null)
    } catch (e) {
      setData([])
      setError(e.message)
    }
    setBusy(false)
  }

  return {
    fetchData,
    busy,
    data,
    error
  }
}

export default useSearch;
