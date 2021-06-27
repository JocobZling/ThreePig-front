import React from 'react';
import backgroundImg from '../../images/login_bg.jpg'

import styled from 'styled-components'
import RegisterForm from "./RegisterForm";

const RegisterPage = styled('div')`
    height:100vh;
    background: url(${backgroundImg});
    background-repeat:no-repeat;
    background-size:100% 100%;
    background-origin:content-box;
`
const Register = styled('div')`
    color:white;
    padding:3vh 60vh;
`
const RegisterContainer = () => (
    <RegisterPage>
        <Register>
            <RegisterForm/>
        </Register>
    </RegisterPage>

)
export default RegisterContainer;
