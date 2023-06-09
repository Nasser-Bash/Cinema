import React, { useState , useEffect} from 'react';
import {  Container ,Row} from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import FeauterdMovies from '../widgets/FeauterdMovies';
import Filter from "../widgets/Filter";
import HeroSection2 from "../widgets/HeroSection2";
import { useDispatch , useSelector } from "react-redux";
import { types  } from "../../redux/action/MoivesAction";
import PaginationMovies from "../widgets/pagination";
import { SearchContext } from "../../App";
import TopRatedMovies from "../widgets/TopRatedMovies";
import TrendingMovies from "../widgets/TrendingMovies";
import NowPlayingMovies from "../widgets/NowPlayingMovies";
function Movietype({searchview}) {
  const [datainput, setdatainput] = useState({});
    const type = useParams();
    const applang = useSelector((state)=>state.languages.lang);
    const { t, i18n } = useTranslation();
    const Dispatch = useDispatch();
    const moviedata = useSelector((state)=>state.movies.movies);
    const moviesPages = useSelector((state)=>state.movies.pagecount);
    useEffect(() => {
        Dispatch(types(applang,type.lang))
      }, [type.lang,applang]);

      const heroSection = ()=>{
        if(type.lang==="ar"){
          return (<HeroSection2 img="arabic.jpg" title={`${t("Arabic Movies")}`} content={t("Find out Arabic Movies")}/>)
        } else if (type.lang=== "en"){
          return (<HeroSection2 img="hollywood-.jpg" title={`${t("English Movies")}`} content={t("Find out English Movies")}/>)
        } else if (type.lang=== "ja"){
          return (<HeroSection2 img="japanese.jpg" title={`${t("Japanese Movies")}`} content={t("Find out Japanese Movies")}/>)
        } else if (type.lang=== "tr"){
          return (<HeroSection2 img="turkish.jpg" title={`${t("Turkey Movies")}`} content={t("Find out Turkish Movies")}/>)
        } else if (type.lang=== "ko"){
          return (<HeroSection2 img="korean.jpg" title={`${t("Korean Movies")}`} content={t("Find out Korean Movies")}/>)
        } else if (type.lang=== "hi"){
          return (<HeroSection2 img="bollywood.jpg" title={`${t("Hindi Movies")}`} content={t("Find out Indian Movies")}/>)
        } else if (type.lang=== "es"){
          return (<HeroSection2 img="spanish.jpg" title={`${t("Spanish Movies")}`} content={t("Find out Spanish Movies")}/>)
        } 
      }
  return (
    <>
    {searchview && (
    <>
      {heroSection()}
          <div className=''>
          <TopRatedMovies type={type.lang}/>
          <NowPlayingMovies type={type.lang}/>
    <SearchContext.Consumer>
     {context => {
     if (context === true) {
       return(
             <Container className='my-5 movies-content' fluid>
              <div className='content '>
              <Filter moviesType={`with_original_language=${type.lang}`}  datainput={datainput} setdatainput={setdatainput}/>
             <Row>
     {
       moviedata.map((movie)=>{
         return(
         <FeauterdMovies movie={movie}/>)
       })
     }
     </Row>
     <PaginationMovies 
     pagenumber={moviesPages}
     type={type.lang}
     datainput={datainput}
     moviesType={`with_original_language=${type.lang}`}
     />
     </div>
             </Container>
        
         
       )}
     }
       }
    </SearchContext.Consumer>
    <TrendingMovies />
    </div>
    </>
    )}
   </>
  )
}

export default Movietype