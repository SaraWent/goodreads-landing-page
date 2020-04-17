//book

import React, { Component } from 'react'

class Book extends Component {

    render() {
        const {
            book,
            removeBook,
            bookID
        } = this.props
        return (

            <article class="book-cont item">
                <div class="book-img">
                    <img src={book.imgurl} />
                </div>
                <div class="book-desc">
                    <div class="form-input">
                        <label>{book.title}</label>
                        <input type="text" placeholder={book.title} />
                    </div>
                    <div class="form-input">
                        <label>{book.author}</label>
                        <input type="text" placeholder={book.author} />
                    </div>

                    <div class="form-input">
                        <label>Description</label>
                        <textarea>{book.desc}</textarea>
                    </div>

                    <div class="retailers">
                        <ul class="buy-links">
                            {book.links.map(item => (
                                <li key={item.id}>
                                    <a class="button" href={item.url} target="_blank">{item.id}</a>
                                </li>
                            ))}
                        </ul>
                        <div class="subnav">
                            <span id="add-retailer">+ New Retailer</span>
                        </div>
                        {/* 
                        {book.links.map(item => (
                            <div class="form-input">
                                <label>{item.id}</label>
                                <input type="text" placeholder={item.id} />
                                <label>{item.url}</label>
                                <input type="text" placeholder={item.url} />
                                <div class="subnav">
                                    <span id="save">Save</span>
                                    <span id="delete">Delete</span>
                                </div>
                            </div>
                        ))} */}


                    </div>
                </div>
                <div class="controls">
                    <button class="btn">Save Entry</button>
                    <button class="btn warning" onClick={() => removeBook(bookID)}>Delete Entry</button>
                    {/* <button class="btn">Move Up</button>
                                <button class="btn">Move Down</button> */}
                </div>

            </article>




        )
    }
}
export { Book }
