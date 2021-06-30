import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {app, user, photo} from './ducks/index'
import {LoginContainer, RegisterContainer} from './containers/index';
import HomeContainer from "./containers/App";

const reducer = combineReducers({
    app,
    user,
    photo
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route path={['/']} exact component={HomeContainer}/>
            <Route
                path={['/today', '/upload', '/all', '/classification']} component={HomeContainer}/>
            <Route path='/login' exact component={LoginContainer}/>
            <Route path='/register' exact component={RegisterContainer}/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)
