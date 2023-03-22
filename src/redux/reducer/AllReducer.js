import { combineReducers } from 'redux';
import { moviesReducer } from "./MoviesReducer";
import { GenersReducer } from "./GenersReducer";
import { MoviCasting } from "./MovieCasting";
import { MovieDetailes } from "./MovieDetailes";
import { MovieVideos } from "./MovieVideos";
import { SimilarMovies } from "./SimilarMovies";
import { TopRatedMovies } from "./TopRatedMovies";
import { TrendingMovies } from "./TrendingMovies";
import { NowPlayingMovies } from "./NowPlayingMovies";
import { Searchreducer } from "./Search";
import { Languages } from "./Languages";

const rootReducer = combineReducers({
    movies: moviesReducer,
    geners: GenersReducer,
    casting: MoviCasting,
    details: MovieDetailes,
    videos: MovieVideos,
    similar: SimilarMovies,
    topRated:TopRatedMovies,
    trending:TrendingMovies,
    nowPlaying:NowPlayingMovies,
    languages : Languages,
    search : Searchreducer,
   

  });
  export default rootReducer;