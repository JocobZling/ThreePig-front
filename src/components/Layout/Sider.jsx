import {Menu} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import {
    HeartOutlined,
    VideoCameraOutlined,
    CalendarOutlined,
    CloudUploadOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import '../../css/index.css'

const {SubMenu} = Menu;

const LeftMenu = () => (
    <Menu mode="inline" selectedKeys={`/${window.location.hash.split('#')[1].split('/')[1]}`}
          style={{backgroundColor: '#ebebeb'}}>
        <Menu.Item key="/" icon={<HeartOutlined/>}>
            <Link to={'/'}>欢迎</Link>
        </Menu.Item>
        <Menu.Item key="/upload" icon={<CloudUploadOutlined />}>
            <Link to={'/upload'}>上传照片</Link>
        </Menu.Item>
        <Menu.Item key="/all" icon={<UnorderedListOutlined/>}>
            <Link to={'/all'}>全部照片</Link>
        </Menu.Item>
        <Menu.Item key="/classification" icon={<CalendarOutlined/>}>
            <Link to={'/classification'}>智能分类</Link>
        </Menu.Item>
        <Menu.Item key="/highlight" icon={<VideoCameraOutlined />}>
            <Link to={'/highlight'}>精彩时刻</Link>
        </Menu.Item>

    </Menu>
)

export default LeftMenu
