import {Avatar, Modal} from 'antd';
import React, {useState} from "react";
import styled from 'styled-components';
import LabelComponent from "../Photo/LabalComponent";
import CloudLeft from '../../images/cloud_left.png'
import CloudRight from '../../images/cloud_right.png'
import {Link} from 'react-router-dom';

const Wrap = styled('div')`
    margin: 5vh 10vh 0 10vh;
    padding: 2vh 0 0 0;
    background-color: rgba(0,0,0,.1);
    border-radius: 5px;
`
const FaceLeft = styled('img')`
    margin: 25px 0 0 0;
    height: 70px;
    vertical-align: bottom;
`
const FaceRight = styled('img')`
    position:relative;
    top:19px;
    left:35px;
    height:80px;
    float:right;
`
const FaceAvatar = ({indexEightFaceList, indexAllFaceList}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <Wrap>
            <LabelComponent name={"人物识别"}/>
            <div style={{display:'flex',alignItems:'flex-end'}}>
                <FaceLeft src={CloudLeft}/>
                    {indexEightFaceList.map((face, i) => (
                        <Link to={`/face/${face.clusteringId}`}><Avatar size={80} src={face.position} key={i}
                                                                        style={{margin: '0 19px 20px 20px'}}/></Link>
                    ))}
                    <FaceRight onClick={showModal} src={CloudRight}/>
            </div>



            <Modal title="More" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}
                   bodyStyle={{minHeight: '10px', overflow: 'auto'}}
                   footer={false}
                   centered={true}
            >
                {indexAllFaceList.map((face, i) => (
                    <Link to={`/face/${face.clusteringId}`}><Avatar size={80} src={face.position} key={i+'more'}
                                                                    style={{margin: '0 19px 20px 20px'}}/></Link>))
                }
            </Modal>
        </Wrap>
    )
}

export default FaceAvatar;
