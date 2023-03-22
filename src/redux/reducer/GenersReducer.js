import { Geners } from "../types/MoviesTypes";
const intialvalue = {generslist :[]}
export const GenersReducer = (state = intialvalue,action)=>{
                switch (action.type) {
                    case Geners:
                        return {generslist:action.data}; 
                    default:
                        return state;
                } 
}