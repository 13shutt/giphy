// SAEARCH "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Gxj4SH2RG6zmJtB97RTHjsJXsqfpgXpE&limit=5"

const API_KEY = 'Gxj4SH2RG6zmJtB97RTHjsJXsqfpgXpE'
const API_URL = 'http://api.giphy.com/v1/gifs'

// fetch trending gifs ------ depends only on rating


const fetchTrendingGifs = async (limit, rating) => {
  const url = `${API_URL}/trending?api_key=${API_KEY}&limit=${limit}&rating=${rating}`
  let fetchData  = await fetch(url)

  let responseData = await fetchData.json();
  return responseData;
}

export default fetchTrendingGifs
