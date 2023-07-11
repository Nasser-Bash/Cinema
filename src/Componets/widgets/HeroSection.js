import React , {useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay ,Pagination,EffectCoverflow } from "swiper";
import { useTranslation } from 'react-i18next';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function HeroSection() {
  const { t, i18n } = useTranslation();
  const [diriction, setdiriction] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const [nav_Bg, setnav_Bg] = useState("m--navbg-green");
  const handleSlideChange = (swiper) => {
   
    setActiveSlideIndex(swiper.activeIndex);

  };
  const [slideTilte, setslideTilte] = useState([
    'BLACK WIDOW',
    'CAPTAIN AMERICA',
    'IRON MAN',
    "THOR"
  ]);
  useEffect(() => {
   if (activeSlideIndex === 0) {
    setnav_Bg("m--navbg-green");
    } else if (activeSlideIndex === 1) {
      setnav_Bg("m--navbg-dark");
    } else if (activeSlideIndex === 2) {
      setnav_Bg("m--navbg-red");
    } else if (activeSlideIndex === 3) {
      setnav_Bg("m--navbg-blue");
    } 
   
  }, [activeSlideIndex]);

  useEffect(() => {
    setdiriction(i18n.dir());
  }, [i18n.dir()]);
  return (
  
  <div className="demo-cont mb-5">
 <div className="fnc-slider example-slider">
<Swiper
      slidesPerView={1}
      onSlideChangeTransitionEnd={handleSlideChange}
      loop={true}
      key={diriction}
      speed={2000}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 20,
        stretch: 25,
        depth: 250,
        modifier: 1,
        slideShadows: false,
      }}
     
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          
          return (` 
          <button key=${index} class="${className} fnc-nav__control mb-2 ${nav_Bg} ">
         ${slideTilte[index]}
          <span class="fnc-nav__control-progress"></span>
        </button>
         
       `);
        },
      }}
      modules={[ Autoplay ,Pagination ,EffectCoverflow]}
      className="fnc-slider__slides"
    >

  
    <SwiperSlide >
        <div className={`fnc-slide m--blend-green `}>
        <div className="fnc-slide__inner" style={{backgroundImage:`url(images/blackwidow.jpg)`}}>
          <div className="fnc-slide__mask animate__rotateInUpLeft" >
            <div className="fnc-slide__mask-inner " style={{backgroundImage:`url(images/blackwidow.jpg)`}}></div>
          </div>
          <div className="fnc-slide__content">
            <h2 className="fnc-slide__heading">
            <div className="fnc-slide__heading-line">
                <span>BLACK</span>
              </div>
              <div className="fnc-slide__heading-line">
                <span>WIDOW</span>
              </div>
              
            </h2>
          
          </div>
        </div>
        </div>
      </SwiperSlide>
      

      <SwiperSlide >
      <div className={`fnc-slide m--blend-dark  `}>
        <div className="fnc-slide__inner" style={{backgroundImage:"url('images/captainamerica.jpg')"}}>
          <div className="fnc-slide__mask">
            <div className="fnc-slide__mask-inner" style={{backgroundImage:"url('images/captainamerica.jpg')"}}></div>
          </div>
          <div className="fnc-slide__content">
            <h2 className="fnc-slide__heading">
              <div className="fnc-slide__heading-line">
                <span>CAPTAIN</span>
              </div>
              <div className="fnc-slide__heading-line">
                <span>AMERICA</span>
              </div>
            </h2>
          
          </div>
        </div>
        </div>
      </SwiperSlide>
      
        <SwiperSlide >
        <div className={`fnc-slide m--blend-red  `}>
        <div className="fnc-slide__inner" style={{backgroundImage:"url('/images/ironman-alt.jpg')"}}>
          <div className="fnc-slide__mask">
            <div className="fnc-slide__mask-inner" style={{backgroundImage:"url('/images/ironman-alt.jpg')"}}></div>
          </div>
          <div className="fnc-slide__content">
            <h2 className="fnc-slide__heading">
              <div className="fnc-slide__heading-line">
                <span>IRON</span>
              </div>
              <div className="fnc-slide__heading-line">
                <span>Man</span>
              </div>
            </h2>
           
          </div>
        </div>
        </div>
      </SwiperSlide>

      <SwiperSlide >
        <div className={`fnc-slide m--blend-blue  `}>
        <div className="fnc-slide__inner" style={{backgroundImage:"url('/images/thor.jpg')"}}>
          <div className="fnc-slide__mask">
            <div className="fnc-slide__mask-inner" style={{backgroundImage:"url('/images/thor.jpg')"}}></div>
          </div>
          <div className="fnc-slide__content">
            <h2 className="fnc-slide__heading">
              <div className="fnc-slide__heading-line">
                <span>Thor</span>
              </div>
              <div className="fnc-slide__heading-line">
                <span>JUST THOR</span>
              </div>
            </h2>
          
          </div>
        </div>
        </div>
      </SwiperSlide>

      </Swiper>
      
 
    
   
    </div>
</div>
  )
}

export default HeroSection
