import {Avatar, Drawer, Button, Modal} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import React, {useState} from "react";

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
        <div>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Button type="primary" onClick={showModal}>
                Open
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>)
}

export default FaceAvatar;
