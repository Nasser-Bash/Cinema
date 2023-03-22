import {Similar} from "../types/MoviesTypes";
const intialvalue = {similar : []}
export const SimilarMovies = (state = intialvalue,action)=>{
                switch (action.type) {
                    case Similar:
                        return {similar:action.data}; 
                    default:
                        return state;
                } 
}