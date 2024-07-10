import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Home from '../pages/Home';
import Login from '../pages/Login';

export default function Routes() {
    return (
        <Switch>
            <MyRoute exact path="/" component={Home} isClosed={false} />
            <MyRoute exact path="/login/" component={Login} isClosed={false} />
        </Switch>
    );
}