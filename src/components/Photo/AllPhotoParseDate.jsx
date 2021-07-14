import {Upload, Button} from 'antd';
import React from "react";
import styled from 'styled-components';
import AllPhoto from "./AllPhoto";
import AllCloud from "../../images/cloud_tag.png"

const Wrap = styled('div')`
    display:flex;
    flex-direction:column;
    margin:20px 10px 10px 10px;
`
const WrapFont = styled('div')`
    display:flex;
    flex-direction:row;
    align-items:flex-end;
    img{
        height:20px;
    }
`
const AllPhotoParseDate = ({photos}) => (
    <Wrap>
        {photos.map((item, i) => (
            <Wrap key={i}>
                <WrapFont>
                    <img src={AllCloud}/>
                    <div className="_month">{item.date.split('-')[1]}月</div>
                    <div className="_day">{item.date.split('-')[2]}日</div>
                    <div style={{
                        fontSize: "12px",
                        color: "grey",
                        fontFamily: 'Microsoft YaHei UI Light'
                    }}> &nbsp;&nbsp;{item.date.split('-')[0]}</div>
                </WrapFont>
                <AllPhoto photos={item.photoDisplayVoList} rowHeight={160} width={160}/>
            </Wrap>
        ))}

    </Wrap>
)

export default AllPhotoParseDate
