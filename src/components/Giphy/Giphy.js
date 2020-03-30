import React from 'react'
import { Grid } from '@giphy/react-components'

const Giphy = (props) => {
  return (
    <>
      {console.log(props.fetchGifs, 'gihpy component')}
      <Grid width={800} columns={3} fetchGifs={props.fetchGifs} />
    </>
  )
}
 
export default Giphy