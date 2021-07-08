import React from 'react';
import '../css/HomePage.css'
import LogoImg from '../images/logo.png'
import ClassDetails from "../constant/ClassDetails";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import {Row} from "antd";

const Classification = ({classificationIndexList}) => {
    return (
        <Row style={{backgroundColor: 'rgba(0,0,0,.1)',margin: '5vh 10vh 0 10vh',}}>
            <div className="container">
                {classificationIndexList.map((item, i) => (
                    <Link to={`/classification/${item.type}`} key={i}>
                        <div className="card-container-2">
                            <div className="controller right"></div>
                            <div className="controller left"></div>
                            <div className="card-holder">
                                <h2 className="day_text">{item.type}</h2>
                                <img src={item.position} className="card"
                                     style={{width: "100%", height: "100%", objectFit: "cover",}}
                                     alt={"待上传"}/>
                                <img src={item.position} className="card" style={{objectFit: "cover"}}/>
                                <img src={item.position} className="card" style={{objectFit: "cover"}}/>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Row>
    )


}
export default Classification
