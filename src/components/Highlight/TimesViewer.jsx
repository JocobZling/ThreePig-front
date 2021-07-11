import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import styled from 'styled-components';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


// import Swiper core and required modules
import SwiperCore, {Pagination, Navigation} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Wrap = styled('div')`
.swiper-container {
  width: 100%;
  height: 100%;
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

.swiper-container {
  width: 100%;
  height: 250px;
  margin: 10px auto;
}
.append-buttons {
  text-align: center;
  margin-top: 20px;
}

.append-buttons button {
  display: inline-block;
  cursor: pointer;
  border: 1px solid #007aff;
  color: #007aff;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 0 10px;
  font-size: 13px;
}
`

const TimesViewer = ({everyTime}) => {
    console.log(everyTime)
    const [setSwiperRef] = useState(null);

    return (
        <Wrap>
            <Swiper onSwiper={setSwiperRef} slidesPerView={3} centeredSlides={true} spaceBetween={30} pagination={{
                "type": "fraction"
            }} navigation={true} className="mySwiper">
                {everyTime.map((item, i) => (
                    <SwiperSlide key={i}><img src={item.src}/></SwiperSlide>
                ))}
            </Swiper>
        </Wrap>
    )
}

export default TimesViewer
