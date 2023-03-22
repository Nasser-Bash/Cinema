import { Casting } from "../types/MoviesTypes";
const intialvalue = {cast : []}
export const MoviCasting = (state = intialvalue,action)=>{
                switch (action.type) {
                    case Casting:
                        return {cast:action.data}; 
                    default:
                        return state;
                } 
}