import { TopRated } from "../types/MoviesTypes";
const intialvalue = {movies :[]}
export const TopRatedMovies = (state = intialvalue,action)=>{
                switch (action.type) {
                    case TopRated:
                        return {movies:action.data}; 
                    default:
                        return state;
                } 
}