import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faStar } from "@fortawesome/free-solid-svg-icons";
import { api } from "../API";
import { Button } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import { useTranslation } from 'react-i18next';
function MoviesCardTwo({movie}) {
  const { t, i18n } = useTranslation();
  return (
   <div key={movie.id}  className='card-movie-2 mx-auto    text-white' >
    <img className='card-background' src = {api.Image + movie.backdrop_path} /> 
     <Zoom>
     <div className='sub-detailes  d-md-flex  '>
     <img className='poster  my-auto ' src = {api.Image + movie.poster_path} /> 
       <div className='detailes my-auto p-1'>
               <h6 className='movie-title '>{movie.title}</h6>   
           <p className='movie-rate px-1'>{movie.vote_average}  <i className='rate-icon'><FontAwesomeIcon icon={faStar}/></i></p>
           <p className='movie-overview'>
            {`${movie.overview.substring(0,100)} ...`}
            </p>
           <Link to={`/movie/${movie.id}`}> <Button>{t('Read more')}</Button></Link>
       </div>
     </div>
     </Zoom>
   </div>

  )
}

export default MoviesCardTwo