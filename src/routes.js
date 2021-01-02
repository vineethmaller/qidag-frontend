import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './resources/styles/index.css'

import App from './pages/App';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ChatBox from './pages/ChatBox';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" ><App /></Route>
                <Route path="/login" ><Login /></Route>
                <Route path="/signup" ><SignUp /></Route>
                <Route path="/chat" ><ChatBox /></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;