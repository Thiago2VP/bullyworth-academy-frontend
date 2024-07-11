import React from 'react';
import { Routes as SelfRouter, Route } from 'react-router-dom';

import AuthProps from './AuthProps';

import Home from '../pages/Home';
import Login from '../pages/Login';

export default function Routes() {
    return (
        <SelfRouter>
            <Route exact path="/" element={<Home />} />
            <Route
                exact path="/login/"
                element={<Login />}
                loader={AuthProps(true)}
            />
        </SelfRouter>
    );
}