import React from 'react'

 function Movie(props) {
  return (
    <div className='movie'>
      <img src={props.image}/>
      <h3>Title: {props.title}</h3>
      <h4>Year: {props.year}</h4>
      
    </div>
  )
}

export default Movie;
