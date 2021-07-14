import {Affix, Button} from 'antd';
import React, {useState} from 'react';
import styled from 'styled-components';
import BackImg from '../../images/cloud_back.png'
import {Link} from 'react-router-dom';
import '../../css/back.css'

const BackImgStyle = styled('img')`
     width:80px;
`


const Back = ({back}) => {

    return (
        <div className={'backImageStyle'}>
            <Affix offsetTop={0} style={{right: '10px'}}>
                <Link to={back}><img src={BackImg}/></Link>
            </Affix>
        </div>

    )
}


export default Back
