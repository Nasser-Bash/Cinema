import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MoviesCardTwo from "./MoviesCardTwo";
import { useTranslation } from 'react-i18next';
import { Navigation, Pagination, Mousewheel, Keyboard ,Autoplay} from "swiper";
import { useEffect } from "react";
import { Container } from "react-bootstrap";


function MoviesSliderTwo({movies,slidetitle}) {
  const { t, i18n } = useTranslation();
  const [diriction, setdiriction] = useState(null);
  useEffect(() => {
    setdiriction(i18n.dir());
  }, [i18n.dir()]);
  return (
    <>
    <h2 className="slider-title my-auto text-white px-4 mb-4">{slidetitle}:</h2>
    <Container  >
         
       <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
        key={diriction}
        modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
        className="mySwiper mb-4 rounded-3"
      >
        {
          movies.map((movie)=>{
            return(
            <SwiperSlide>
               <MoviesCardTwo movie={movie}/>
            </SwiperSlide>)
          })
        }
      </Swiper>
  </Container>
    </>
    
  )
}

export default MoviesSliderTwo