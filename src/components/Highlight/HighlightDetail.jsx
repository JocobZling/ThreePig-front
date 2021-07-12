import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';
import styled from "styled-components";
import AllPhoto from "../Photo/AllPhoto";


// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Wrap = styled('div')`

display:flex;
.swiper-container {
  width: 100%;
  height: 300px;
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

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`
const HighlightDetail = ({highlightDetail}) => (
    <Wrap>
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
        }} pagination={{
            "clickable": true
        }} navigation={false} className="mySwiper">
            {highlightDetail.map((item, i) => (
                <SwiperSlide><img src={item} key={i}/></SwiperSlide>
            ))}

        </Swiper>
        <AllPhoto photos={highlightDetail}/>
    </Wrap>

)

export default HighlightDetail
