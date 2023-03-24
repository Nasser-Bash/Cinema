import { AllMovies , Paginate , Filter,MoviesTypes} from "../types/MoviesTypes";
    const intialvalue = {movies : [], pagecount:0}
export const moviesReducer = (state = intialvalue,action)=>{
                switch (action.type) {
                    case AllMovies:
                        return {movies:action.data,pagecount:action.pages,types:action.type}; 
                    case MoviesTypes:
                            return {movies:action.data,pagecount:action.pages,types:action.type};
                    case Paginate:
                            return {movies:action.data,pagecount:action.pages}; 
                     case Filter : 
                            return {movies:action.data,pagecount:action.pages,types:action.type}
                   
                    default:
                        return state;
                } 
}