import React from 'react'

const Giphy = (props) => {
  return (
    <>
      <h1>this is giphy component</h1>
      {props.gifs.map(item => (
        <img key={item.id} src={`https://media.giphy.com/media/${item.id}/giphy.gif`} />
      ))}
    </>
  )
}
 
export default Giphy