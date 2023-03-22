import { Trending } from "../types/MoviesTypes";
const intialvalue = {movies :[]}
export const TrendingMovies = (state = intialvalue,action)=>{
                switch (action.type) {
                    case Trending:
                        return {movies:action.data}; 
                    default:
                        return state;
                } 
}