import React from 'react';
import {Menu, Dropdown, Avatar} from 'antd';
import {DownOutlined, UserOutlined} from '@ant-design/icons';
import styled from "styled-components";
import AvatarDefaultImg from '../../images/user_image.png'

const loginOut = () => {
    window.localStorage.removeItem('jwt');
    window.localStorage.removeItem('id');
    window.location.href = '/';
}

const menu = (
    <Menu>
        <Menu.Item disabled>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                修改信息
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" onClick={() => loginOut()}>
                退出
            </a>
        </Menu.Item>
    </Menu>
);

const HeaderAvatar = () => {
    return (
        <Dropdown overlay={menu} arrow>
            <Avatar size={50} src={AvatarDefaultImg} style={{marginRight: '50px'}}/>
        </Dropdown>
    )
}

export default HeaderAvatar
