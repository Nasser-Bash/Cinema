import React,{ useState , useEffect } from "react";
import {  Container, Row } from 'react-bootstrap'
import FeauterdMovies from "../widgets/FeauterdMovies";
import { useSelector ,useDispatch} from "react-redux";
import { getAllMovies } from "../../redux/action/MoivesAction";
import PaginationMovies from "../widgets/pagination";
import TrendingMovies from "../widgets/TrendingMovies";
import TopRatedMovies from "../widgets/TopRatedMovies";
import NowPlayingMovies from "../widgets/NowPlayingMovies";
import HeroSection from "../widgets/HeroSection";
import { useTranslation } from 'react-i18next';
import Filter from "../widgets/Filter";
function Home({searchview}) {
const { t, i18n } = useTranslation();
const [movies, setmovies] = useState([]);
const [pageCount, setpageCount] = useState(0);
const [datainput, setdatainput] = useState({});

const moviesData = useSelector((state)=>state.movies.movies);
const moviesPages = useSelector((state)=>state.movies.pagecount);
const applang = useSelector((state)=>state.languages.lang);
const Dispatch = useDispatch();

useEffect(() => {
  Dispatch(getAllMovies(applang));
}, [applang]);

  useEffect(() => {
    setmovies(moviesData);
    setpageCount(moviesPages); 
    
  }, [moviesData]);

  return (
    <div className='home text-white'>
      {searchview && (
         <>
         <HeroSection/>
         <TopRatedMovies type="en"/>
         
      <TrendingMovies img="Unlimited movies.jfif" title={t("Unlimited movies Are You Ready ?")} content={t('Find out All Movies')}/>
          <div className="content">
    
     
      <Container fluid className='my-5 movies-content '>
        <div className="">
     <Filter  datainput={datainput} setdatainput={setdatainput} />
        <Row>
        {
          movies.map((movie)=>{
            return(
            <FeauterdMovies key={movie.id} movie={movie}/>)
          })
        }
        </Row>
        <PaginationMovies 
        pagenumber={pageCount}
        datainput={datainput}
        />
        </div>
      </Container>
     
      <NowPlayingMovies type="en" />
      </div>
      </>
      )}
    </div>
  )
}

export default Home