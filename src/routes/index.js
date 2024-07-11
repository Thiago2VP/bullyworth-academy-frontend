import React from 'react';
import { Routes as SelfRouter, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function Routes() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return (
        <SelfRouter>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route
                exact path='/user'
                element={isLoggedIn ? <Login /> : <Navigate to="/login" />}
            />
        </SelfRouter>
    );
}
