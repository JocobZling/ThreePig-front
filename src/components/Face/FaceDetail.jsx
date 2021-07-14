import {Avatar, Input} from 'antd';
import React, {useState, useCallback} from "react";
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

const ClusteringName = styled('div')`
    color:grey;
    display:flex;
    flex-direction:row;
    align-items:flex-end;
`
const FaceDetail = ({faceList, updateClusteringName, id}) => {
    const [inputOpen, setInputOpen] = useState(false)

    const EditOpen = () => {
        setInputOpen(!inputOpen)
    }
    const Edit = (e) => {
        console.log(e.value)
        updateClusteringName(e, id)
    }
    return (<div>
        <Back back={'/classification'}/>
        <AvatarWrap>
            <Avatar size={80} src={faceList.facePosition}/>
            <AvatarFontWrap>
                <div>{faceList.photoDisplayVoList.length}张</div>
                <ClusteringName>{faceList.clusteringName !== null || inputOpen ? faceList.clusteringName : "Ta是谁 "}
                    {inputOpen ? <Input placeholder="Ta是谁" bordered={false} style={{width: '65px'}}
                                        onPressEnter={Edit}/> : ''}<EditOutlined
                        onClick={EditOpen}/></ClusteringName>
            </AvatarFontWrap>
        </AvatarWrap>
        <DetailWrap>
            <AllPhoto photos={faceList.photoDisplayVoList}/>
        </DetailWrap>
    </div>)
}

export default FaceDetail
