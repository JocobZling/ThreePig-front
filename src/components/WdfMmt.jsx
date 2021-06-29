import React, {useEffect, useState} from 'react';
import {
    CaretRightOutlined
} from '@ant-design/icons';
import Test from '../images/login.jpg'
import '../css/HomePage.css'
import {Image} from 'antd';
import LogoImg from '../images/logo.png'

const WdfMmt = () => {

    return(
        <div className="photo">
            <div style={{width: "750px",float:"left"}}>
                <div style={{width: "600px",margin:"40px",height: "30px",textAlign: "center"}}>XXXXXX</div>
                <div className="photo_frame">
                    <div style={{width: "600px", height: "400px", overflow: "hidden"}}>
                        <ul id="animated-portfolio">
                            <li>
                                <img  src='${LogoImg}'/>
                            </li>
                            <li>
                                <img  src='${LogoImg}'/>
                            </li>
                            <li>
                                <img  src='${LogoImg}'/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div style={{width: "400px",float: "left", margin: "50px 0 20px 20px",height: "600px"}}>
                <div className="roll-wrap roll_col h600" id="d">
                    <ul className="roll__list" style={{position: "absolute", left: "0", top: "0"}}>

                        <li className="con-five">
                            <div style={{width: "150px",float: "left",margin: "0 10px 10px 40px",overflow: "hidden"}}>
                                <img className="conimg" src="${LogoImg}"/>
                                <div className="txt-five">
                                    <h3>动物</h3>
                                </div>
                            </div>
                            <div style={{width: "150px",float: "left",margin: "0 15px 10px 10px",overflow: "hidden"}}>
                                <img className="conimg" src="${LogoImg}"/>
                                <div className="txt-five">
                                    <h3>食物</h3>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <a className="control pre" href="javascript:;">&lt;</a>
                    <a className="control next" href="javascript:;">&gt;</a>
                </div>
            </div>
        </div>
    )


}
export default WdfMmt