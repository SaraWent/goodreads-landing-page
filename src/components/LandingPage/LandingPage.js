import React from 'react';
import { DisplayBookList } from "../DisplayBooklist";
// import { BookList } from "../Booklist";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: this.props.books
        };
    }

    render() {
        const { books } = this.state;
        return (
            <>
                <header>
                    <div className="container center">
                        <h1>This is My Awesome Campaign</h1>
                        <h2>It's so cool you'll want them all.</h2>
                    </div>
                </header>
                <main>
                    <div className="container">
                        {/* <article className="book-cont">
                            <div className="book-img">
                                <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580724442l/29566048._SX98_.jpg" />
                            </div>
                            <div className="book-desc">
                                <h3 className="bk-title">Pandemic: Tracking Contagions, from Cholera to Ebola and Beyond</h3>
                                <h4 className="author">Sonia Shah</h4>

                                <span className="bk-desc">
                                    <b>A thrilling glimpse into the next likely global contagion---and how to stop it. </b>
                                </span>
                                <div className="retailers">
                                    <ul className="buy-links">
                                        <li><a className="button" href="">Amazon</a></li>
                                        <li><a className="button" href="">B&N</a></li>
                                        <li><a className="button" href="">BAM</a></li>
                                        <li><a className="button" href="">IndieBound</a></li>
                                        <li><a className="button" href="">Powells</a></li>
                                    </ul>
                                </div>
                            </div>

                        </article> */}

                        <DisplayBookList books={books} />
                        {/* <BookList books={books} /> */}

                    </div>
                </main>
                <footer>
                    <p>&copy;2020</p>
                </footer>

            </>
        );
    }
}

export { LandingPage };
