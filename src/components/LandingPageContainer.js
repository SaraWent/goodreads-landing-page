import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { Admin } from './Admin';

class LandingPageContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [
                {
                    isbn: '9781250118004',
                    imgurl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580724442l/29566048._SX98_.jpg',
                    title: 'Pandemic',
                    author: 'Sonia Shah',
                    desc: 'Book1 Description',
                    links: [
                        { id: 'Amazon', url: 'https://www.amazon.com/dp/10DIGITISBN' },
                        { id: 'B&N', url: 'http://www.barnesandnoble.com/s/13DIGITISBN' },
                        { id: 'BAM', url: 'https://www.booksamillion.com/product/13DIGITISBN' },
                        { id: 'IndieBound', url: 'https://www.indiebound.org/book/13DIGITISBN' }
                    ]
                }
            ]
        }
    }
    render() {
        return (
            <Routes>
                <Route path="/" element={<LandingPage books={this.state.books} />} />
                <Route path="/admin" element={<Admin books={this.state.books} />} />
            </Routes>
        );
    }
}

export { LandingPageContainer };