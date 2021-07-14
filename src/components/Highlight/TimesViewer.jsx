import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import styled from 'styled-components';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import History from '../../images/history.png'
import {Link} from 'react-router-dom';

// import Swiper core and required modules
import SwiperCore, {Pagination, Navigation} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Wrap = styled('div')`
 display:flex;
 margin: 30px 20px 20px 20px;
 
 .wrapImg{
    height:203px;
    margin:7px 20px 0 20px;
 }
 
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
  flex-direction:column;
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
  object-fit: cover;
  height:200px;
}

.swiper-container {
  width: 100%;
  height: 200px;
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
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    color:white;
}

.day_date_1{
    position: absolute;
    left: 10px;
    bottom: 36px;
    z-index: 100000;
    color: whitesmoke !important;
    font-size: 30px;
    font-weight:400
}
.day_date_2{
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 100000;
    color: whitesmoke !important;
    font-size: 22px;
}

`

const TimesViewer = ({everyTime}) => {
    const [setSwiperRef] = useState(null);
    return (
        <Wrap>
            <img className="wrapImg" src={History}/>
            <Swiper onSwiper={setSwiperRef} slidesPerView={6} grabCursor={true} centeredSlides={false} spaceBetween={20}
                    pagination={{
                        "type": "fraction"
                    }} navigation={true} className="mySwiper">
                {everyTime.map((item, i) => (

                    <SwiperSlide key={i}>
                        <Link to={`/highlight/EveryTime/${item.date}`}>
                            <img src={item.src} alt={'error'}/>
                            <div className={'day_date_1'}>
                                {item.date.split('-')[1]}月{item.date.split('-')[2]}日
                            </div>
                            <div className={'day_date_2'}>
                                {item.date.split('-')[0]}年
                            </div>
                        </Link>
                    </SwiperSlide>

                ))}
            </Swiper>
        </Wrap>
    )
}

export default TimesViewer
