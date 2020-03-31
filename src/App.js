import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Giphy from './components/Giphy'
//import Loader from './components/Loader'

import fetchTrendingGifs from './api/api'

import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {

  //const [viewLoader, setViewLoader] = useState(true)
  const [gifsTrenging, setGifsTrending] = useState([])

  useEffect(() => {
    (async () => {
      let jsonData = await fetchTrendingGifs('25', 'G');
      await setGifsTrending(jsonData.data)
    })()
    // setTimeout(() => {
    //   setViewLoader(false)
    // }, 1500)
  }, [])

  return (
    <>
      <CssBaseline />
        <>
          <Header />
          <Giphy gifs={gifsTrenging} />
        </>
    </>
  )
}
 
export default App