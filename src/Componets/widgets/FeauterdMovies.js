import React ,{useState,useEffect} from 'react'
import { Col ,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle , faStar } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import axios from "axios";
import { api } from "../API";
import Zoom from 'react-reveal/Zoom';
function FeauterdMovies({movie}) {
  const [movies, setmovies] = useState([]);

 
  const moviegeners = async()=>{
    const repos = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=99d659bb21c1c0c2f274345cb02be910&language=${applang}`);
    setmovies(repos.data)
  }
  const applang = useSelector((state)=>state.languages.lang);
  useEffect(() => {
    moviegeners()
  }, [movie.id,applang]);
  return (
   
    <Col lg={2} md={3} sm={4} xs={6} className="movie-card">
      
    <Link to={`/movie/${movie.id}`}>
    <Zoom  bottom>
    <div key={movie.id} className='featured-movie mx-auto mb-3'>
      <img src = {api.Image + movie.poster_path} />
      <div className='sub-detailes  text-center '>
        <div className='detailes'>
        <i  className='movie-play'><FontAwesomeIcon icon={faPlayCircle}/></i>
            <p className='movie-rate '>{Math.round(movie.vote_average * 10) / 10 }<i className='rate-icon'><FontAwesomeIcon icon={faStar}/></i></p>
            <h6 className='movie-title p-3 '>{movie.title}</h6>
        </div>
      </div>
    </div>
    </Zoom>
    </Link>
   
    </Col>
  
  )
}

export default FeauterdMovies