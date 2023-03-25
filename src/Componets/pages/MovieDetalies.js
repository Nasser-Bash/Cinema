import React, { useState , useEffect} from 'react';
import { Col, Container ,Row,Tab , Tabs ,Form,FloatingLabel,Button} from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import FeauterdMovies from '../widgets/FeauterdMovies';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch , useSelector } from "react-redux";
import { getmoviedetaile , getmoviecast , getsimilar , getvideos } from "../../redux/action/MoivesAction";
import { api } from "../API";
import { SearchContext } from "../../App";
import Zoom from 'react-reveal/Zoom';
import ReactPlayer from 'react-player'
function MovieDetalies({searchview}) {
  const [Istutorail, setIstutorail] = useState();
  const id = useParams();
  const applang = useSelector((state)=>state.languages.lang);
  const { t, i18n } = useTranslation();
  const [key, setKey] = useState('Videos');
  const [videokey, setvideokey] = useState();
  const Dispatch = useDispatch();
     const moviedetails = useSelector((state)=>state.details.details);
     const moviecast = useSelector((state)=>state.casting.cast);
     const movievideos = useSelector((state)=>state.videos.videos);
     const similarmovie = useSelector((state)=>state.similar.similar);
  useEffect(() => {
    Dispatch(getmoviedetaile(applang,id.Movieid))
    
  }, [moviedetails,id.Movieid]);
  useEffect(() => {
    Dispatch(getmoviecast(applang,id.Movieid))
  }, [moviecast,applang]);
  useEffect(() => {
    Dispatch(getvideos(id.Movieid))
    
  }, [id.Movieid]);

  useEffect(() => {
    Dispatch(getsimilar(applang,id.Movieid))
  }, [similarmovie,applang]);

  return (
    <div className='movies-page'>
      <div>
      {searchview && (
 <SearchContext.Consumer>
 {context => {
   if (context === true) {
     return(
      <>
       <div className='movie-detalies text-white  '>
       <img  className='movie-tutorail' src=
                {api.Image + moviedetails.backdrop_path }/>
<div className='movie-info p-3'>
 
     <Container>
       <div className='movie-logo'>
         <h1 className='movie-title'>{moviedetails.title}</h1>
         </div>
         <h6 className='movie-rate'>{Math.round(moviedetails.vote_average * 10) / 10 }<i className="rate-icon ms-1"><FontAwesomeIcon  icon={faStar}/></i> </h6>
         <ul className='movie-tags   list-unstyled'>
         {Array.isArray(moviedetails.genres)
   ? moviedetails.genres.map(type => {
       return <li className='nav-item  d-inline-block me-2'  >{type.name}</li>;
     })
   : null}
      </ul>
      <p className='movie-story'>{moviedetails.overview}</p>
      </Container>
</div>
        </div>
         <div className='additonal-info ' >
         <Container fluid >
           <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="tabs mb-3 " 
     >
      <Tab eventKey="Videos" title={t("Videos")} className='videos '>
        
          <Row >
        {movievideos.map((video)=>{
          return(
            <Col  lg={4}  sm={6} className=' video  mb-3 ' >
             <Zoom >
              <div className=' video  '>
                  <iframe  allowFullScreen width="100%" height='200' src={`https://www.youtube.com/embed/${video.key}`}></iframe>
                  </div>
                  </Zoom>
            </Col>
            
          )
        })}
      </Row>
      </Tab>
      <Tab eventKey="cast" title={t("Casting")}>
      <Row>
        {
          moviecast.map((cast)=>{
            return(
             <Col lg={2} md={3} sm={4} xs={6}>
             <div className='cast mb-3'>
                  <img className='cast-profile-img' src={api.Image + cast.profile_path }/>
                  <span className='cast-info text-center py-5'>
                  <p>{t("Original name")} : {cast.name} </p>
                  <p>{t("Character")} : {cast.character} </p>
                  </span>
              </div>
             </Col>
            )
          })
        }
         </Row>
      </Tab>
      <Tab className='more-info text-white' eventKey="more-info" title={t("More")}>
      <ul className='list-unstyled'>
      <li className='nav-item'>{t("Release Date")} : {moviedetails.release_date}</li>
      <li className='nav-item'>{t("original language")} : {moviedetails.original_language}</li> 
      <li className='nav-item'>{t("Rate")} : {moviedetails.vote_average}</li>
      <li className='nav-item'>{t("vote count")} : {moviedetails.vote_count}</li>  
      </ul>
        <h5>{t("Production Companies")} :</h5>
        <Row>
      {Array.isArray(moviedetails.production_companies)
        ? moviedetails.production_companies.map(company => {
            return( <Col   >
              <img className='company-logo' src={api.Image + company.logo_path}/>
              </Col>);
          })
        : null}
        </Row>
      </Tab>
      <Tab eventKey="similar" title={t("Similar")} >
      <Row>
        {similarmovie.map((movie)=>{
          return(
            <FeauterdMovies movie={movie}/>
          )
        })}
      </Row>
      </Tab>
     </Tabs>
         </Container>
         </div>
         </>
     )
   }
 }}
</SearchContext.Consumer>
      )}
    </div>
   
    </div>
  
   
    
   
   
  )
}

export default MovieDetalies;