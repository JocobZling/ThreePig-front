import {Form, Input, Button, Col, Typography, Modal} from 'antd';
import React, {useState} from 'react'
import {connect} from 'react-redux'
import {actions as userActions} from '../../ducks/user'
import {withRouter} from 'react-router-dom'
import '../../css/form.css'
import userImage from '../../images/user_image.png'
import Logo from '../../images/cloud_logo.png'
import {Link} from 'react-router-dom';

const layout = {
    labelCol: {span: 9},
    wrapperCol: {span: 24, offset: 1},
};

const tailLayout = {
    wrapperCol: {offset: 7, span: 12},
};

const style = {
    color: 'white'
};

const RegisterForm = ({register}) => {

    const onFinish = values => {
        register(values)
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Col offset={7} style={{marginBottom: "35px"}}>
                <img src={Logo} width={"270vh"} alt={0}/>
            </Col>
            <Form
                {...layout}
                name="basic"
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{
                    width: "400px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)",
                    margin: "auto",
                    padding: "25px",
                    textAlign: "center"
                }}
            >

                <Col offset={8} style={{margin: '5vh 0 8vh 0'}}>
                    <img src={userImage} width="80px" alt={0}/>
                </Col>
                <Form.Item
                    name="email"
                    rules={[{required: true, message: '请输入邮箱'}]}
                    style={style}
                >
                    <Input placeholder="邮箱" size="large"/>
                </Form.Item>
                <Form.Item
                    name="name"
                    rules={[{required: true, message: '请输入用户名'}]}
                    style={style}
                >
                    <Input placeholder="用户名" size="large"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    placeholder="密码"
                    rules={[{required: true, message: '请输入密码'}]}
                    style={style}
                >
                    <Input.Password placeholder="密码" size="large"/>
                </Form.Item>
                <Form.Item {...tailLayout} layout={'horizontal'}>
                    <Button type="primary" htmlType="submit"
                            style={{width: '48%', backgroundColor: 'black', borderColor: 'black', marginRight: '10px'}}>
                        注册
                    </Button>
                </Form.Item>
                <Col offset={13}><Link to={'/login'} style={{
                    fontSize: "x-small"
                }}>已有账号？直接登录-></Link></Col>
            </Form>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    register: (data) => dispatch(userActions.register(data)),
});

export default connect(null, mapDispatchToProps)(withRouter(RegisterForm))

