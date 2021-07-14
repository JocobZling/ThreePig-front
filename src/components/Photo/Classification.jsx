import React from 'react';
import '../../css/HomePage.css'
import {Link} from 'react-router-dom';
import {Row, Col} from "antd";
import LabelComponent from "./LabalComponent";

const Classification = ({classificationIndexList}) => {
    return (
        <Row style={{
            backgroundColor: 'rgba(0,0,0,.1)',
            margin: '5vh 10vh 0 10vh',
            paddingTop: '2vh',
            borderRadius: '5px'
        }}>
            <LabelComponent name={"智能聚类"}/>
            <Col span={23} offset={1} style={{margin:'2vh 5vh'}}>
                {classificationIndexList.map((item, i) => (
                    JSON.stringify(item) !== "{}" ? (
                        <Link to={`/classification/${item.type}`} key={i}>
                            <div className="card-container-2">
                                <div className="controller right"></div>
                                <div className="controller left"></div>
                                <div className="card-holder">
                                    <div className="day_text">{item.type}</div>
                                    <img src={item.position} className="card"
                                         style={{width: "100%", height: "100%", objectFit: "cover",}}
                                         alt={"待上传"}/>
                                    <img src={item.position} className="card" style={{objectFit: "cover"}}/>
                                    <img src={item.position} className="card" style={{objectFit: "cover"}}/>
                                </div>
                            </div>
                        </Link>) : ""
                ))}
            </Col>
        </Row>
    )


}
export default Classification
