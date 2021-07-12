import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import Highlight from '../../images/highlight_logo.png'

// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper/core';
import styled from "styled-components";
import {Link} from 'react-router-dom';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);
const Wrap = styled('div')`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:0 20px 20px 20px;
.swiper-container {
  width: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 400px;
  height: auto;
  display:flex;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height:250px;
  text-align:center;
  object-fit: cover;
}
.day_date{
    position: absolute;
    left: 20px;
    bottom: 20px;
    z-index: 100000;
    color: whitesmoke !important;
    font-size: 40px;
    font-weight:400
}
`
const ContentLogo = styled('img')`
    width:1000px;
    margin-bottom:25px;
`
const SiderWrap = styled('div')`
    display:flex;
    align-item:center;
`

const HighlightContent = ({bestAll, bestRecentAll, bestPerson, bestRecentPerson}) => {
    return (
        <Wrap>
            <ContentLogo src={Highlight}/>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'}
                    coverflowEffect={{
                        "rotate": 50,
                        "stretch": 0,
                        "depth": 100,
                        "modifier": 1,
                        "slideShadows": true
                    }} className="mySwiper">

                <SwiperSlide>
                    <Link to={`/highlight/BestRecentAll`}>
                        <SiderWrap>
                            <img src={bestRecentAll.position}/>
                            <div className={'day_date'}>
                                近期精彩
                            </div>
                        </SiderWrap>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/highlight/BestRecentPerson`}>
                        <SiderWrap>
                            <img src={bestRecentPerson.position}/>
                            <div className={'day_date'}>
                                人物
                            </div>
                        </SiderWrap>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/highlight/BestAll`}>
                        <SiderWrap>
                            <img src={bestAll.position}/>
                            <div className={'day_date'}>
                                高光时刻
                            </div>
                        </SiderWrap>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/highlight/BestPerson`}>
                        <SiderWrap>
                            <img src={bestPerson.position}/>
                            <div className={'day_date'}>
                                人物
                            </div>
                        </SiderWrap>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </Wrap>
    )

}
export default HighlightContent
