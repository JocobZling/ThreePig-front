import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper/core';
import styled from "styled-components";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);
const Wrap = styled('div')`
display:flex;
.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 400px;
  height: auto;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
`

const HighlightContent = ({bestAll,bestRecentAll,bestPerson,bestRecentPerson}) => {
    return (
        <Wrap>
            <div>精彩时刻</div>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'}
                    coverflowEffect={{
                        "rotate": 50,
                        "stretch": 0,
                        "depth": 100,
                        "modifier": 1,
                        "slideShadows": true
                    }} className="mySwiper">

                <SwiperSlide>
                    <img src={bestRecentAll.position}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bestRecentPerson.position}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bestAll.position}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bestPerson.position}/>
                </SwiperSlide>

            </Swiper>
        </Wrap>
    )

}
export default HighlightContent
