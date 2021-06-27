import {Menu} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import {
    HeartOutlined,
    UserOutlined,
    CalendarOutlined,
    MonitorOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import '../../css/index.css'

const {SubMenu} = Menu;

const LeftMenu = () => (
    <Menu mode="inline" selectedKeys={`/${window.location.hash.split('#')[1].split('/')[1]}`}
          style={{backgroundColor: '#ebebeb'}}>
        <Menu.Item key="/index" icon={<HeartOutlined/>}>
            <Link to={'/index'}>欢迎</Link>
        </Menu.Item>
        <Menu.Item key="/upload" icon={<MonitorOutlined/>}>
            <Link to={'/upload'}>上传照片</Link>
        </Menu.Item>
        <Menu.Item key="/all" icon={<UnorderedListOutlined/>}>
            <Link to={'/all'}>全部照片</Link>
        </Menu.Item>
        <Menu.Item key="/classification" icon={<CalendarOutlined/>}>
            <Link to={'/classification'}>智能分类</Link>
        </Menu.Item>
        <Menu.Item key="/face" icon={<CalendarOutlined/>}>
            <Link to={'/face'}>人脸聚类</Link>
        </Menu.Item>
        <Menu.Item key="/highlight" icon={<UnorderedListOutlined/>}>
            <Link to={'/highlight'}>精彩时刻</Link>
        </Menu.Item>

    </Menu>
)

export default LeftMenu
