import React from 'react';
import HomePage from "../components/Layout";
import {Route, Switch} from 'react-router-dom';
import WelcomeContainer from './WelcomeContainer'
import HomePageContainer from "./photo/HomePageContainer";
import UploadPhotoContainer from "./photo/UploadPhotoContainer";
import EveryTimesPhotoDisplayContainer from "./photo/EveryTimesPhotoDisplayContainer";
import AllPhotoDisplayContainer from "./photo/AllPhotoDisplayContainer";
import ClassificationDetailContainer from "./photo/ClassificationDetailContainer";
import ClassificationContainer from "./photo/ClassificationContainer";
import FaceDetailContainer from "./face/FaceDetailContainer";
import HighlightIndexContainer from "./highlight/HighlightIndexContainer";
import HighlightDetailContainer from "./highlight/HighlightDetailContainer";


const HomeContainer = () => {
    if (!window.localStorage.getItem('jwt')) {
        window.location.href = '/#/login'
    }
    return (<HomePage>
        <Switch>
            <Route path='/' exact component={HomePageContainer}/>
            {/*<Route path='/index' exact component={HomePageContainer}/>*/}
            <Route path='/today/:date' component={EveryTimesPhotoDisplayContainer}/>
            <Route path='/upload' exact component={UploadPhotoContainer}/>
            <Route path='/all' exact component={AllPhotoDisplayContainer}/>
            <Route path='/classification' exact component={ClassificationContainer}/>
            <Route path='/classification/:type' exact component={ClassificationDetailContainer}/>
            <Route path='/face/:clusteringId' exact component={FaceDetailContainer}/>
            <Route path='/highlight' exact component={HighlightIndexContainer}/>
            <Route path='/highlight/:type' exact component={HighlightDetailContainer}/>
            <Route path='/highlight/:type/:date' exact component={HighlightDetailContainer}/>
            <Route path='*' exact component={WelcomeContainer}/>
        </Switch>
    </HomePage>)
}

export default HomeContainer;
