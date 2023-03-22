import { Videos } from "../types/MoviesTypes";
const intialvalue = {videos : []}
export const MovieVideos = (state = intialvalue,action)=>{
                switch (action.type) {
                    case Videos:
                        return {videos:action.data}; 
                    default:
                        return state;
                } 
}