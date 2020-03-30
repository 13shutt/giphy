import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Giphy from './components/Giphy'
import Loader from './components/Loader'

import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {

  const [viewLoader, setViewLoader] = useState(true)
  const [gifs, setGifs] = useState([])

  const fetchGifs = () => {
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=Gxj4SH2RG6zmJtB97RTHjsJXsqfpgXpE&limit=1')
      .then(response => response.json())
      .then(json => setGifs(json.data))
  }

  useEffect(() => {
    fetchGifs()
    setTimeout(() => {
      setViewLoader(false)
    }, 1500)
  }, [])

  return (
    <>
      <CssBaseline />
        <>
          <Header />
          <Giphy gifs={gifs} />
        </>
    </>
  )
}
 
export default App