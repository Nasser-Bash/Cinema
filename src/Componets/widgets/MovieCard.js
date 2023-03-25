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
    </div>
    </Link>
    </div>
    </Zoom>
  )
}

export default MovieCard