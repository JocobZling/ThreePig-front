import {Layout, Menu} from 'antd';
import React from 'react';
import {withRouter} from 'react-router-dom'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import '../../css/index.css'
import LeftMenu from "../Layout/Sider";
import LogoImg from '../../images/logo.png'
import styled from "styled-components";

const {Header, Sider, Content} = Layout;

const Logo = styled('div')`
    .logo{
        height:70px;
    }
`

class FaceLayout extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Header style={{backgroundColor: "white", marginTop: "1vh", minHeight: "10vh"}}>
                    <Logo>
                        <img src={LogoImg} alt={'logo'} className="logo"/>
                    </Logo>
                </Header>

                <Layout>
                    <Sider
                        theme={"light"}
                        style={{
                            overflow: 'auto',
                            left: 0,
                            minHeight: '89vh',
                            backgroundColor: '#ebebeb',
                            padding: '10vh 0 0 0'
                        }}
                        width={240}>
                        <LeftMenu/>
                    </Sider>
                    <Layout>
                        <Content
                            style={{
                                margin: '10px 16px',
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(FaceLayout);
