import React from 'react'
import  ReactPaginate  from "react-paginate";
import { useTranslation } from 'react-i18next';
import { useDispatch,useSelector} from "react-redux";
import { getAllMovies,types,filtering} from "../../redux/action/MoivesAction";
import { AllMovies , MoviesTypes , Filter  } from "../../redux/types/MoviesTypes";
const PaginationMovies = ({pagenumber,type,datainput,moviesType}) => {
  const { t, i18n } = useTranslation();
  const applang = useSelector((state)=>state.languages.lang);
  const moviesAc = useSelector((action)=>action.movies.types);
  const ac = useSelector((action)=>action.movies);
  const Dispatch = useDispatch();
    const handlePageClick = (data)=>{
  
        if(moviesAc===AllMovies){
          Dispatch(getAllMovies(applang ,data.selected+1));
        } else if (moviesAc===MoviesTypes){
          Dispatch(types(applang ,type,data.selected+1));
        }else if (moviesAc===Filter){
           Dispatch(filtering(applang ,datainput.year,datainput.id,data.selected+1,moviesType));
         
        }
  }
    const pageCount = pagenumber;
  return (
    
    <ReactPaginate
        breakLabel="..."
       
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        pageCount={pageCount}
   
        renderOnZeroPageCount={null}
        containerClassName={"pagination p-3 justify-content-center"}
        pageClassName={"page"}
        pageLinkClassName={"page-link"}
        previousClassName={"page"}
        nextClassName={"page"}
        breakClassName={"page"}
        breakLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        activeLinkClassName={"active"}
      />
  
  )
}
export default PaginationMovies ; 