import {Avatar, Drawer, Button, Modal} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import React, {useState} from "react";
import styled from 'styled-components';

const Wrap = styled('div')`
    margin: 5vh 10vh 0 10vh;
    background-color: rgba(0,0,0,.1);
    padding: 40px 30px 20px 30px;
`
const FaceAvatar = () => {

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
            <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
            <Button type="primary" onClick={showModal}>
                Open
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </Wrap>)
}

export default FaceAvatar;
