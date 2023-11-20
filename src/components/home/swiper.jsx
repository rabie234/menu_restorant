import React, { useRef, useState } from 'react';
// Import Swiper React 
import slide1 from '../../assets/images/slide1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.css';

// import required modules
import { EffectFade, Navigation,Autoplay, Pagination } from 'swiper/modules';

export default function SwiperHome() {
  return (
    <>
    <Swiper
    autoplay={true}
   spaceBetween={30}
   effect={'fade'}
   loop={true}
   navigation={false}
   pagination={{
     clickable: true,
   }}

   
   onSlideChange={()=>{
    setTimeout(() => {
        
    document.querySelector(".text-slide").classList.add("active")

    }, 1000);
    
    document.querySelector(".text-slide").classList.remove("active")
   }}

   modules={[EffectFade, Navigation,Autoplay, Pagination]}
   className="mySwiper"
    >
   
      <SwiperSlide>
        
       <div className="slide-content slide1 ">
        <div className="text-slide active">
        <h4>Shawarma </h4>
        <h2>Delicius & luxury </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab eaque quam magnam</p>
        </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slide-content slide2">    <div className="text-slide active">
        <h4>Shawarma </h4>
        <h2>Delicius & luxury </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab eaque quam magnam</p>
        </div></div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slide-content slide3">    <div className="text-slide active">
        <h4>Shawarma </h4>
        <h2>Delicius & luxury </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab eaque quam magnam</p>
        </div></div>
      </SwiperSlide>
    </Swiper>
  </>
  );
}
