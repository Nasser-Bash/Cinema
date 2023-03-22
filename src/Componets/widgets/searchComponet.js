import React from 'react'
import { useSelector } from "react-redux";
import { useEffect ,useState} from 'react';
import FeauterdMovies from "./FeauterdMovies";
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
function SearchComponet() {
  const { t, i18n } = useTranslation();
    const [movies, setmovies] = useState([]);
    const moviesdatasearch = useSelector((state)=>state.search.searchmovies);
    useEffect(() => {
      setmovies(moviesdatasearch)
    },[moviesdatasearch]);


  return (
<div className='content text-white' style={{marginTop: '80px'}}>
  <Container>
  <Row>
   {        
           
          movies.length > 0 ? (
              movies.map((movie)=>{
                return(
                    <FeauterdMovies movie={movie}/>
                )
            })    
              ) : <h3 className='text-white text-center mt-5'>{t('No result found')} </h3>}
   </Row>
  </Container>
  
        
 </div>
  )
}

export default SearchComponet