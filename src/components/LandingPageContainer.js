import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { Admin } from './Admin';

class LandingPageContainer extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={
                        <LandingPage
                        // books={books}
                        />
                    } > <Route />
                    </Route>
                    <Route path="/admin" element={
                        <Admin
                        // books={books}
                        // setBooks={this.setBooks}
                        // udateBook={this.updateBook}
                        // removeBook={this.removeBook}
                        />
                    }  > <Route />
                    </Route>
                </Routes>
            </>
        );
    }
}


export { LandingPageContainer };