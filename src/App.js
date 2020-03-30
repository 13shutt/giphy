import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Giphy from './components/Giphy'
import Loader from './components/Loader'

import CssBaseline from '@material-ui/core/CssBaseline';

import { GiphyFetch } from '@giphy/js-fetch-api'
const gf = new GiphyFetch('Gxj4SH2RG6zmJtB97RTHjsJXsqfpgXpE')

const App = () => {

  const [viewLoader, setViewLoader] = useState(true)
  const [gifs, setGifs] = useState([])

  const fetchGifs = async (offset) => {
    const data = await gf.trending({ offset, limit: 10 })
    await setGifs(data)
    console.log('fetch gifs', data, gifs)
  }

  useEffect(() => {
    fetchGifs()
    setTimeout(() => {
      setViewLoader(false)
    }, 1500)
  }, [])

  return (
    <>
      {console.log(gifs, "gifs")}
      <CssBaseline />
      {viewLoader ? 
      <Loader/> :
      <>
        <Header />
        <Giphy fetchGifs={gifs} />
      </>
      }
    </>
  )
}
 
export default App