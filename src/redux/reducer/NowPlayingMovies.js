import { NowPlaying } from "../types/MoviesTypes";
const intialvalue = {movies :[]}
export const NowPlayingMovies = (state = intialvalue,action)=>{
                switch (action.type) {
                    case NowPlaying:
                        return {movies:action.data}; 
                    default:
                        return state;
                } 
}