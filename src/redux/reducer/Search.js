import { Search } from "../types/MoviesTypes";
const intialvalue = {searchmovies :[]}
export const Searchreducer = (state = intialvalue,action)=>{
                switch (action.type) {
                    case Search:
                        return {searchmovies:action.data}; 
                    default:
                        return state;
                } 
}