import React, {useEffect, useState} from 'react';
import {
    CaretRightOutlined
} from '@ant-design/icons';
import Test from '../images/login.jpg'
import '../css/HomePage.css'
import {Image} from 'antd';
import LogoImg from '../images/logo.png'
import ClassDetails from "../constant/ClassDetails";

const Classify=({name})=>(
            <div className="card-container-2" >
                <div className="controller right"></div>
                <div className="controller left"></div>
                <div className="card-holder">
                    <div className="card" style={{backgroundImage:`src:${LogoImg}`, objectFit: "cover"}}>
                        <div className="txt-five1">
                            <h2 className="day_text">{name}</h2>
                        </div>
                    </div>
                    <div className="card" style={{backgroundImage: `src:${LogoImg}`,objectFit: "cover"}}></div>
                    <div className="card" style={{backgroundImage: `src:${LogoImg}`, objectFit: "cover"}}></div>
                </div>
            </div>
)
const Classification = () => {

    return(
        <div className="container">
            {ClassDetails.map((item,i)=>(
                <Classify name={item.name}/>
            ))}



            <div class="card-container-4">
                <div id="as" class="card first" style={{backgroundImage: `src:${LogoImg}`,objectFit: "cover"}}>
                    <div class="txt-five1">
                        <h2 class="day_text">动物</h2>
                    </div>
                </div>
                <div class="card second" style={{backgroundImage: `src:${LogoImg}`,backgroundSize:"cover"}}>
                    <div class="txt-five1">
                        <h2 class="day_text">食物</h2>
                    </div>
                </div>
                <div class="card third" style={{backgroundImage: `src:${LogoImg}`,backgroundSize:"cover"}}>
                    <div class="txt-five1">
                        <h2 class="day_text">工具</h2>
                    </div>
                </div>
                <div class="card forth" style={{backgroundImage: `src:${LogoImg}`,backgroundSize:"cover"}}>
                    <div class="txt-five1">
                        <h2 class="day_text">哇</h2>
                    </div>
                </div>
                <div class="card fifth" style={{backgroundImage: `src:${LogoImg}`,backgroundSize:"cover"}}>
                    <div class="txt-five1">
                        <h2 class="day_text">大</h2>
                    </div>
                </div>
                <div class="card sixth" style={{backgroundImage: `src:${LogoImg}`,backgroundSize: "cover"}}>
                    <div class="txt-five1">
                        <h2 class="day_text">生活</h2>
                    </div>
                </div>
            </div>
        </div>

    )


}
export default Classification