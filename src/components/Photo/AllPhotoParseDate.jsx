import {Upload, Button} from 'antd';
import React from "react";
import styled from 'styled-components';
import AllPhoto from "./AllPhoto";

const Wrap = styled('div')`
    display:flex;
    flex-direction:column;
    margin:20px 10px 10px 10px;
`
const WrapFont = styled('div')`
    font-size:30px;
    font-weight:400;
`
const AllPhotoParseDate = ({photos}) => (
    <Wrap>
        {photos.map((item, i) => (
            <Wrap key={i}>
                <WrapFont>{item.date}</WrapFont>
                <AllPhoto photos={item.photoDisplayVoList} rowHeight={160} width={160}/>
            </Wrap>
        ))}

    </Wrap>
)

export default AllPhotoParseDate
