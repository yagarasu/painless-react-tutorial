class API {
  async fetch(query, country) {
    const baseUrl = process.env.REACT_APP_API_URL
    let url = baseUrl + 'search?'
    if (query) {
      url += 'name_like=' + query
    }
    if (country) {
      url += 'alpha_two_code=' + country
    }
    const response = await fetch(url)
    return await response.json()
  }
}

export default new API();
