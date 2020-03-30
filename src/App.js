import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Giphy from './components/Giphy'
import Loader from './components/Loader'

import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {

  const [viewLoader, setViewLoader] = useState(true)

  const fetchGifs = () => {
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=Gxj4SH2RG6zmJtB97RTHjsJXsqfpgXpE')
      .then(response => response.json())
      .then(jsondata => console.log(jsondata))
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
      {viewLoader ? 
        <Loader/> :
        <>
          <Header />
          <Giphy />
        </>
      }
    </>
  )
}
 
export default App