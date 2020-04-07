import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { Admin } from './Admin';

class LandingPageContainer extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <LandingPage />
                        }
                    >
                        <Route />
                    </Route>
                    <Route
                        path="/admin"
                        element={
                            <Admin />
                        }
                    >
                        <Route />
                    </Route>
                </Routes>
            </>
        );
    }
}


export { LandingPageContainer };