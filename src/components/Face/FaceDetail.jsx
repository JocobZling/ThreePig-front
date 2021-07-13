import {Row, Avatar, Col} from 'antd';
import React from "react";
import styled from 'styled-components';
import {EditOutlined, UserOutlined} from '@ant-design/icons';
import AllPhoto from "../Photo/AllPhoto";
import Back from "../Layout/Back";

const AvatarWrap = styled('div')`
    display:flex;
    align-items:flex-end;
    justify-content:center;
    margin:8vh 0 8vh 0;
`
const AvatarFontWrap = styled('div')`
    display:flex;
    text-align:center;
    flex-direction:column;
`
const DetailWrap = styled('div')`
    margin: 8vh 10vh 0 10vh;
`
const FaceDetail = ({faceList}) => (
    <div>
        <Back back={'/classification'}/>
        <AvatarWrap>
            <Avatar size={80} icon={<UserOutlined/>}/>
            <AvatarFontWrap>
                <div>{faceList.length}张</div>
                <div>待添加<EditOutlined/></div>
            </AvatarFontWrap>
        </AvatarWrap>
        <DetailWrap>
            <AllPhoto photos={faceList}/>
        </DetailWrap>
    </div>
)

export default FaceDetail
