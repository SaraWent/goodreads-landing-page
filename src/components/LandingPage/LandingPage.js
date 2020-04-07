import React from 'react';

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
                        <article class="book-cont">
                            <div class="book-img">

                                <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1513189658l/36742993._SX98_.jpg" />
                            </div>
                            <div class="book-desc">
                                <h3 class="bk-title">Pandemic 1918: Eyewitness Accounts from the Greatest Medical Holocaust in Modern History</h3>
                                <h4 class="author">Catharine Arnold</h4>

                                <span class="bk-desc">
                                    <b>Before AIDS or Ebola, there was the Spanish Flu -- This narrative history marks the 100th anniversary of an epidemic that altered world history.</b>
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
