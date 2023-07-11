import React from 'react'
import { Link } from 'react-router-dom';
import { api } from "../API";

function MovieCard({movie}) {
  return (
  
    <div>
     <Link to={`/movie/${movie.id}`}>
    <div key={movie.id}  className='card-movie mx-auto mb-3' >
      <img src = {api.Image + movie.poster_path} />
    </div>
    </Link>
    </div>
  
  )
}

export default MovieCard