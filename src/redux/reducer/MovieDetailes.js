
import { Details } from "../types/MoviesTypes";
const intialvalue = {details : []}
export const MovieDetailes = (state = intialvalue,action)=>{
                switch (action.type) {
                    case Details:
                        return {details:action.data}; 
                    default:
                        return state;
                } 
}