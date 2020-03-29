import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Giphy from './components/Giphy'
import Loader from './components/Loader'

import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {

  const [viewLoader, setViewLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setViewLoader(false)
    }, 3000);
  }, []);

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