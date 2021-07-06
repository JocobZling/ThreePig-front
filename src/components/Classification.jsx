import React from 'react';
import '../css/HomePage.css'
import LogoImg from '../images/logo.png'
import ClassDetails from "../constant/ClassDetails";
import {Link} from 'react-router-dom';

const Classify = ({name, position}) => (
        <Link to={`/classification/${name}`}>
            <div className="card-container-2">
                <div className="controller right"></div>
                <div className="controller left"></div>
                <div className="card-holder">
                    <h2 className="day_text">{name}</h2>
                    <img src={position} className="card" style={{width: "100%", height: "100%", objectFit: "cover",}}
                         alt={123}/>
                    <img src={position} className="card" style={{backgroundImage: `src:${position}`, objectFit: "cover"}}/>
                    <img src={position} className="card" style={{backgroundImage: `src:${position}`, objectFit: "cover"}}/>
                </div>
            </div>
        </Link>
)
const Classification = ({classificationIndexList}) => {

    return (
        <div className="container">
            {classificationIndexList.map((item, i) => (
                <Classify name={item.type} position={item.position} key={i}/>
            ))}


            {/*<div className="card-container-4">*/}
            {/*    <div id="as" className="card first" style={{backgroundImage: `src:${LogoImg}`, objectFit: "cover"}}>*/}
            {/*        <div className="txt-five1">*/}
            {/*            <h2 className="day_text">动物</h2>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="card second" style={{backgroundImage: `src:${LogoImg}`, backgroundSize: "cover"}}>*/}
            {/*        <div className="txt-five1">*/}
            {/*            <h2 className="day_text">食物</h2>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="card third" style={{backgroundImage: `src:${LogoImg}`, backgroundSize: "cover"}}>*/}
            {/*        <div className="txt-five1">*/}
            {/*            <h2 className="day_text">工具</h2>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="card forth" style={{backgroundImage: `src:${LogoImg}`, backgroundSize: "cover"}}>*/}
            {/*        <div className="txt-five1">*/}
            {/*            <h2 className="day_text">哇</h2>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="card fifth" style={{backgroundImage: `src:${LogoImg}`, backgroundSize: "cover"}}>*/}
            {/*        <div className="txt-five1">*/}
            {/*            <h2 className="day_text">大</h2>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="card sixth" style={{backgroundImage: `src:${LogoImg}`, backgroundSize: "cover"}}>*/}
            {/*        <div className="txt-five1">*/}
            {/*            <h2 className="day_text">生活</h2>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>

    )


}
export default Classification
