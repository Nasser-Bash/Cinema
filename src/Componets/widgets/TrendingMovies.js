import React , {useEffect,useState} from 'react'
import  axios  from "axios";
import MoivesSlider from "./MoivesSlider";
import { useTranslation } from 'react-i18next';
import { useDispatch , useSelector } from "react-redux";
import { getTrendingMovies } from "../../redux/action/MoivesAction";
function TrendingMovies() {
    const { t, i18n } = useTranslation();
    const Dispatch = useDispatch();
    const moviesdata = useSelector((state)=>state.trending.movies);
    const applang = useSelector((state)=>state.languages.lang);
    useEffect(() => {
      Dispatch(getTrendingMovies(applang));
    }, [moviesdata,applang]);
    return (
    <div className="movies-slider trending-movies">
     <MoivesSlider movies={moviesdata} slidetitle={t("Trending")} />
    </div>
  )
}

export default TrendingMovies