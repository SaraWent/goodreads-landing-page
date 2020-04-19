import React from 'react';
import { BookList } from "../Booklist";

class LandingPage extends React.Component {

    render() {
        return (
            <>
                <header>
                    <div class="container center">
                        <h1>This is My Awesome Campaign</h1>
                        <h2>It's so cool you'll want them all.</h2>
                    </div>
                </header>
                <main>
                    <div class="container">
                        <article class="book-cont">
                            <div class="book-img">
                                <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580724442l/29566048._SX98_.jpg" />
                            </div>
                            <div class="book-desc">
                                <h3 class="bk-title">Pandemic: Tracking Contagions, from Cholera to Ebola and Beyond</h3>
                                <h4 class="author">Sonia Shah</h4>

                                <span class="bk-desc">
                                    <b>A thrilling glimpse into the next likely global contagion---and how to stop it. </b>
                                </span>
                                <div class="retailers">
                                    <ul class="buy-links">
                                        <li><a class="button" href="">Amazon</a></li>
                                        <li><a class="button" href="">B&N</a></li>
                                        <li><a class="button" href="">BAM</a></li>
                                        <li><a class="button" href="">IndieBound</a></li>
                                        <li><a class="button" href="">Powells</a></li>
                                    </ul>
                                </div>
                            </div>

                        </article>

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
