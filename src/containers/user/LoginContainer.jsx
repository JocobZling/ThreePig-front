import React from 'react';
import {Row, Col, Image, Layout} from 'antd';
import backgroundImg from '../../images/login_bg.jpg'

import styled from 'styled-components'
import LoginForm from "./LoginForm";

const LoginPage = styled('div')`
    height:100vh;
    background: url(${backgroundImg});
    background-repeat:no-repeat;
    background-size:100% 100%;
    background-origin:content-box;
`
const FormContainer = styled('div')`
    color:white;
    padding:3vh 60vh;
`
const LoginContainer = () => (
    <LoginPage>
        <FormContainer>
            <LoginForm/>
        </FormContainer>
    </LoginPage>

)
export default LoginContainer;
