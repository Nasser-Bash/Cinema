import React , {useEffect,useState} from 'react'
import MoviesSliderTwo from "./MoviesSliderTwo";
import { useTranslation } from 'react-i18next';
import { useDispatch , useSelector } from "react-redux";
import { getTopRatedMovies } from "../../redux/action/MoivesAction";
function TopRatedMovies(type) {
    const { t, i18n } = useTranslation();
    const Dispatch = useDispatch();
    const moviesdata = useSelector((state)=>state.topRated.movies);
    const applang = useSelector((state)=>state.languages.lang);
    useEffect(() => {
      Dispatch(getTopRatedMovies(applang,type.type));
    }, [moviesdata,applang]);
    return (
    <div className="movies-slider top-rated-movies">
     <MoviesSliderTwo  movies={moviesdata} slidetitle={t("Top Rated")} />
    </div>
  )
}

export default TopRatedMovies