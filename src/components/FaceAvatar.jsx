import {Avatar, Drawer, Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import React, {useState, useCallback} from "react";


const FaceAvatar = React.forwardRef((props, ref) => {
    const [state, setState] = useState({
        visible: false
    })
    const showDrawer = () => {
        setState({
            visible: true,
        });
    };

    const onClose = () => {
        setState({
            visible: false,
        });
    };
    return (
        <div className={'FaceAvater'}>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <Drawer
                title="Basic Drawer"
                placement="top"
                closable={false}
                onClose={onClose}
                visible={state.visible}
                getContainer={false}
                style={{position: 'absolute'}}
            >
            </Drawer>
        </div>)
})

export default FaceAvatar;
