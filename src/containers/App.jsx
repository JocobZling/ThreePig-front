import React from 'react';
import HomePage from "../components/Layout";
import {Route, Switch} from 'react-router-dom';
import WelcomeContainer from './WelcomeContainer'
import UserPasswordContainer from "./UserPassword";
import UserProfileContainer from "./UserProfile";
import HomePageContainer from "./photo/HomePageContainer";
import UploadPhotoContainer from "./photo/UploadPhotoContainer";
import EveryTimesPhotoDisplayContainer from "./photo/EveryTimesPhotoDisplayContainer";


const HomeContainer = () => {
    // if (!window.localStorage.getItem('jwt')) {
    //     window.location.href = '/#/login'
    // }
    return (<HomePage>
        <Switch>
            <Route path='/' exact component={HomePageContainer}/>
            <Route path='/index' exact component={HomePageContainer}/>
            <Route path='/today' exact component={EveryTimesPhotoDisplayContainer}/>
            <Route path='/upload' exact component={UploadPhotoContainer}/>
            <Route path='/password' exact component={UserPasswordContainer}/>
            <Route path='*' exact component={WelcomeContainer}/>
        </Switch>
    </HomePage>)
}

export default HomeContainer;
