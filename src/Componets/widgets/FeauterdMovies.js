import React ,{useState,useEffect} from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
    
    <div key={movie.id} className='featured-movie mx-auto mb-3'>
      <img src = {api.Image + movie.poster_path} /> 
    </div>
   
    </Link>
   
    </Col>
  
  )
}

export default FeauterdMovies