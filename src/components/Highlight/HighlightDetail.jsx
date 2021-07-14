import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import '../../css/highlightDetail.css'

// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation, EffectFade
} from 'swiper/core';
import styled from "styled-components";
import AllPhoto from "../Photo/AllPhoto";
import Back from "../Layout/Back";

SwiperCore.use([EffectFade]);

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Wrap = styled('div')`

display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
.swiper-container {
    width: 600px;
    height: 400px;
    background-color: #ffffff;
    border-radius: 4px;
    padding: 9px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 100px 50px 20px 50px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-pagination swiper-pagination-bullets{
   display:none;
}
`
const PhotoWrap = styled('div')`
 display:flex;
 flex-direction:row;
 justify-content:center;
 align-items:center;
 width:40%;
 maxHeight:89vh;
 margin:40px 10px 0 10px;
`

const HighlightDetail = ({highlightDetail}) => (
    <Wrap>
        <Back back={'/highlight'}/>
        <Swiper effect="fade" spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 10000,
            "disableOnInteraction": true,
        }} navigation={false} className="mySwiper">
            {highlightDetail.map((item, i) => (
                <SwiperSlide>
                    <div>
                        <img className={'highlightImg'} src={item.src} key={i}/>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
        <PhotoWrap>
            {highlightDetail.length >= 10 ? <AllPhoto photos={highlightDetail} rowHeight={120}/> :
                <AllPhoto photos={highlightDetail} rowHeight={160}/>}
        </PhotoWrap>

    </Wrap>

)

export default HighlightDetail
