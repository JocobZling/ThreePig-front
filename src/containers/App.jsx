import React from 'react';
import HomePage from "../components/Layout";
import {Route, Switch} from 'react-router-dom';
import WelcomeContainer from './WelcomeContainer'
import UserPasswordContainer from "./UserPassword";
import UserProfileContainer from "./UserProfile";
import HomePageContainer from "./photo/HomePageContainer";


const HomeContainer = () => {
    // if (!window.localStorage.getItem('jwt')) {
    //     window.location.href = '/#/login'
    // }
    return (<HomePage>
        <Switch>
            <Route path='/' exact component={HomePageContainer}/>
            <Route path='/index' exact component={HomePageContainer}/>
            <Route path='/profile' exact component={UserProfileContainer}/>
            <Route path='/password' exact component={UserPasswordContainer}/>
            <Route path='*' exact component={WelcomeContainer}/>
        </Switch>
    </HomePage>)
}

export default HomeContainer;
