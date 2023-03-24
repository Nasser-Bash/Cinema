import { AllMovies , MoviesTypes , Search , Geners , Filter , Details , Casting , Videos , Similar , NowPlaying , TopRated , Trending} from "../types/MoviesTypes";
import axios from "axios";
import { api } from "../../Componets/API";
export const applanguage =  (applang) => {
    return  (dispatch) =>{
        dispatch({type: 'English' , data:applang})
    }
}
export const getAllMovies =  (lang,page) => {
    return async (dispatch) =>{
        const repos = await axios.get(`${api.baseUrl}/${api.type.movies}/popular?api_key=${api.api_key}&language=${lang}&page=${page}`);
        dispatch({type: AllMovies , data:repos.data.results,pages:repos.data.total_pages})
    }
}
export const searchmovies =  (word) => {
    return async (dispatch) =>{
        const repos = await axios.get(`${api.baseUrl}/search/${api.type.movies}?api_key=${api.api_key}&page=1&language=en-US&query=${word}`);
        dispatch({type: Search , data:repos.data.results,pages:repos.data.total_pages})
    }
}
export const getgenres =  (lang) => {                                                    
    return async (dispatch) =>{
        const repos = await axios.get(`${api.baseUrl}/genre/${api.type.movies}/list?api_key=${api.api_key}&language=${lang}`);
        dispatch({type: Geners , data:repos.data.genres})
    }
}
export const types =  (applang,lang,page) => {                                                    
    return async (dispatch) =>{
        const repos = await axios.get(`${api.baseUrl}/discover/${api.type.movies}?api_key=${api.api_key}&with_original_language=${lang}&language=${applang}&page=${page}`);
        dispatch({type: MoviesTypes , data:repos.data.results,pages:repos.data.total_pages});
       
    }
}
export const filtering =  (applang,year,id, page,lang) => {                                                    
    return async (dispatch) =>{
        const repos = await axios.get(`${api.baseUrl}/discover/${api.type.movies}?api_key=${api.api_key}&with_genres=${id}&${lang}&primary_release_year=${year}&page=${page}&language=${applang}`);
        
        dispatch({type: Filter , data:repos.data.results,pages:repos.data.total_pages})
    }
}
export const getmoviedetaile =  (lang,id) => {
    return async (dispatch) =>{
        const repos = await axios.get(`${api.baseUrl}/${api.type.movies}/${id}?api_key=${api.api_key}&language=${lang}`);
        dispatch({type: Details , data:repos.data})
    }
}
export const getmoviecast =  (lang,id) => {
    return async (dispatch) =>{
        const repos = await axios.get(`${api.baseUrl}/${api.type.movies}/${id}/credits?api_key=${api.api_key}&language=${lang}`);
        dispatch({type: Casting , data:repos.data.cast})
    }
}
export const getsimilar =  (lang,id) => {
    return async (dispatch) =>{
        const repos = await axios.get(`${api.baseUrl}/${api.type.movies}/${id}/similar?api_key=${api.api_key}&language=${lang}&page=1`);
        dispatch({type: Similar , data:repos.data.results})
    }
}
export const getvideos =  (id) => {
    return async (dispatch) =>{
        const repos = await axios.get(`${api.baseUrl}/${api.type.movies}/${id}/videos?api_key=${api.api_key}`);
        dispatch({type: Videos , data:repos.data.results})
    }
}
export const getTrendingMovies =  (lang) => {
    return async (dispatch) =>{
        const repos = await axios.get(`${api.baseUrl}/trending/${api.type.movies}/day?api_key=${api.api_key}&language=${lang}`);
        dispatch({type: Trending , data:repos.data.results})
    }
}
export const getTopRatedMovies =  (lang,type) => {
    return async (dispatch) =>{
        const repos = await axios.get(`${api.baseUrl}/${api.type.movies}/top_rated?api_key=${api.api_key}&language=${lang}&with_original_language=${type}&page=1`);
        dispatch({type: TopRated , data:repos.data.results});
       
    }
}
export const getnowplayingMovies =  (lang,type) => {
    return async (dispatch) =>{
        const repos = await axios.get(`${api.baseUrl}/${api.type.movies}/now_playing?api_key=${api.api_key}&language=${lang}&with_original_language=${type}`);
        dispatch({type: NowPlaying , data:repos.data.results})
    }
}