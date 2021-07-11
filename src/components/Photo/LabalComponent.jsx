import {Upload, Button} from 'antd';
import React from "react";
import styled from 'styled-components';

const Label = styled('div')`
    width:100px;
    height:40px;
    text-align:center;
    padding:10px 0 10px 0;
    color:white;
    background: #000000;
    box-shadow: -3px 3px 4px rgba(0,0,0,0.5);
    border-radius: 5px;
`


const LabelComponent = ({name}) => (
    <Label>
            {name}
    </Label>
)

export default LabelComponent
