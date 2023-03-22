import React from 'react'
import {Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetalies from "./pages/MovieDetalies";
import Movietype from "./pages/Movietype";
function AllRouters({searchview,setsearchview}) {
  return (
   
        <Routes>
            <Route path='/' element={<Home searchview={searchview} setsearchview={setsearchview}/>}/>
            <Route path='/movie/:Movieid' element={<MovieDetalies searchview={searchview}/>}/>
            <Route path='/movie/type/:lang' element={<Movietype searchview={searchview}/>}/>
        </Routes>
    
  )
}

export default AllRouters