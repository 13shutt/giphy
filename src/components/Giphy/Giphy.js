import React from 'react'
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

const gf = new GiphyFetch('Gxj4SH2RG6zmJtB97RTHjsJXsqfpgXpE')

const fetchGifs = (offset) => gf.trending({ offset, limit: 10 })

const Giphy = () => (
  <Grid width={800} columns={4} fetchGifs={fetchGifs} />
)
 
export default Giphy