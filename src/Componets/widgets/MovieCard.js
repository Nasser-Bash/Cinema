import React ,{useState,useEffect} from 'react'
import { Col ,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle , faStar } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { api } from "../API";
import Zoom from 'react-reveal/Zoom';
function MovieCard({movie}) {
  return (
    <Zoom>
    <div>
     <Link to={`/movie/${movie.id}`}>
    <div key={movie.id}  className='card-movie mx-auto mb-3' >
      <img src = {api.Image + movie.poster_path} />
      <div className='sub-detailes  text-center'>
        <div className='detailes'>
        <i  className='movie-play'><FontAwesomeIcon icon={faPlayCircle}/></i>
                <h6 className='movie-title p-3'>{movie.title}</h6>   
            <p className='movie-rate '>{Math.round(movie.vote_average * 10) / 10 } <i className='rate-icon'><FontAwesomeIcon icon={faStar}/></i></p>
        </div>
      </div>
    </div>
    </Link>
    </div>
    </Zoom>
  )
}

export default MovieCard