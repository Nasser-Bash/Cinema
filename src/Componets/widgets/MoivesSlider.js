import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from 'react-i18next';
import MovieCard from "./MovieCard";
import { Container } from "react-bootstrap";

function MoivesSlider({movies,slidetitle,type}) {
  const { t, i18n } = useTranslation();
  const [diriction, setdiriction] = useState(null);
  useEffect(() => {
    setdiriction(i18n.dir());
  }, [i18n.dir()]);
  return (
    <div className="movies-slider">
      <Container fluid>
      <h2 className="slider-title my-auto px-3 text-white">{slidetitle} :</h2>
      <Swiper
        spaceBetween={15}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400:{
            slidesPerView:2,
          },
          639: {
            slidesPerView: 3,
          },
          865:{
            slidesPerView:4
          },
          1000:{
            slidesPerView:6
          },
          1500:{
            slidesPerView:6
          },
          1700:{
            slidesPerView:7
          }
        }}
        navigation={true}
        modules={[Navigation,Autoplay]}
        key={diriction}
        className="mySwiper  "
      >
        
        {
          movies.map((movie)=>{
            return(
            <SwiperSlide>
               <MovieCard movie={movie}/>
            </SwiperSlide>)
          })
        }
        
        
      </Swiper>
       </Container>
    </div>
   
  )
}

export default MoivesSlider