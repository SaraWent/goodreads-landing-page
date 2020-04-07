import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div class="container center">
          <div class="form-input">
            <label>Headline</label>
            <input type="text" placeholder="This is My Awesome Campaign" />
          </div>
          <div class="form-input">
            <label>Subhead</label>
            <input type="text" placeholder="It's so cool you'll want them all." />
          </div>
        </div>
      </header>
      <main>
        <div class="container">
          <article class="book-cont item">
            <div class="book-img">
              {/* from macmillan site because the Goodreads images suck */}
              <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580724442l/29566048._SX98_.jpg" />
            </div>
            <div class="book-desc">
              <div class="form-input">
                <label>Book Title</label>
                <input type="text" placeholder="Pandemic: Tracking Contagions, from Cholera to Ebola and Beyond" />
              </div>
              <div class="form-input">
                <label>Author</label>
                <input type="text" placeholder="Sonia Shah" />
              </div>

              <div class="form-input">
                <label>Description</label>
                <textarea>A thrilling glimpse into the next likely global contagion---and how to stop it.</textarea>
              </div>

              <div class="retailers">
                <ul class="buy-links">
                  <li><a class="button active" href="">Amazon</a></li>
                  <li><a class="button" href="">B&N</a></li>
                  <li><a class="button" href="">BAM</a></li>
                  <li><a class="button" href="">IndieBound</a></li>
                  <li><a class="button" href="">Powells</a></li>
                </ul>
                <div class="subnav">
                  <span id="add-retailer">+ New Retailer</span>
                </div>

                <div class="form-input">
                  <label>Label</label>
                  <input type="text" placeholder="Amazon" />
                  <label>URL</label>
                  <input type="text" placeholder="URL Goes Here" />
                  <div class="subnav">
                    <span id="save">Save</span>
                    <span id="delete">Delete</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="controls">
              <button class="btn warning">Delete Entry</button>
              <button class="btn">Move Up</button>
              <button class="btn">Move Down</button>
            </div>

          </article>
          <article class="book-cont item">
            <div class="book-img">

              <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1513189658l/36742993._SX98_.jpg" />
            </div>
            <div class="book-desc">
              <div class="form-input">
                <label>Book Title</label>
                <input type="text" placeholder="Pandemic 1918: Eyewitness Accounts from the Greatest Medical Holocaust in Modern History" />
              </div>
              <div class="form-input">
                <label>Author</label>
                <input type="text" placeholder="Catharine Arnold" />
              </div>

              <div class="form-input">
                <label>Description</label>
                <textarea>Before AIDS or Ebola, there was the Spanish Flu -- This narrative history marks the 100th anniversary of an epidemic that altered world history.</textarea>
              </div>

              <div class="retailers">
                <ul class="buy-links">
                  <li><a class="button" href="">Amazon</a></li>
                  <li><a class="button" href="">B&N</a></li>
                  <li><a class="button" href="">BAM</a></li>
                  <li><a class="button" href="">IndieBound</a></li>
                  <li><a class="button" href="">Powells</a></li>
                </ul>
                <div class="subnav">
                  <span id="add-retailer">+ New Retailer</span>
                </div>
              </div>
            </div>
            <div class="controls">
              <button class="btn warning">Delete Entry</button>
              <button class="btn">Move Up</button>
              <button class="btn">Move Down</button>
            </div>

          </article>
          <article class="book-cont item">
            <div class="form-input">
              <label>Add New Item by 13 Digit by ISBN</label>
              <input type="text" placeholder="Enter ISBN" />
              <div class="controls">
                <button class="btn">Submit</button>
              </div>
            </div>
          </article>
          <div class="submit-page">
            <button class="submit">Save Page</button>
          </div>

        </div>
      </main>
      <footer>
        <p>&copy;2020</p>
      </footer>
    </div>
  );
}

export default App;
