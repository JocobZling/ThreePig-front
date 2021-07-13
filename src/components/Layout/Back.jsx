import {Affix, Button} from 'antd';
import React, {useState} from 'react';
import styled from 'styled-components';
import BackImg from '../../images/cloud_back.png'
import {Link} from 'react-router-dom';

const BackImgStyle = styled('img')`
     width:80px;
`
const BackWrap = styled('div')`
    position:absolute;
    right:10px;
    top:80px;
`


const Back = ({back}) => {

    return (
        <BackWrap>
            <Affix offsetTop={0} style={{right: '10px'}}>
                <Link to={back}><BackImgStyle src={BackImg}/></Link>
            </Affix>
        </BackWrap>

    )
}


export default Back
