import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Home from '../pages/Home';

export default function Routes() {
    return (
        <Switch>
            <MyRoute exact path="/" component={Home} isClosed={false} />
        </Switch>
    );
}