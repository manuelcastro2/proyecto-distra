import React,{useRef,useState} from "react";
import './css/slider.css';
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import { Autoplay,Pagination,Navigation} from 'swiper/modules';

const SlideComponent = ({imagenes}) => {

  return (
    <Swiper 
    className="color1"
    navigation={true}
    centeredSlides={true}
    modules={[Pagination,Navigation,Autoplay]}
    slidesPerView={1}
    pagination={{
      clickable: true,
    }}
    autoplay={{
          delay:5000,
          disableOnInteraction: false,
        }}
    loop={true}
    >
      {imagenes.map((image, index2) => (
        <SwiperSlide><div ><img className="img1" src={image} alt={index2}/></div></SwiperSlide>
      ))}
      
      
    </Swiper>
  );

}

export default SlideComponent;