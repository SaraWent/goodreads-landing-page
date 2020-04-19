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

            <article className="book-cont item">
                <div className="book-img">
                    <img src={book.imgurl} />
                </div>
                <div className="book-desc">
                    <div className="form-input">
                        <label>{book.title}</label>
                        <input type="text" placeholder={book.title} />
                    </div>
                    <div className="form-input">
                        <label>{book.author}</label>
                        <input type="text" placeholder={book.author} />
                    </div>

                    <div className="form-input">
                        <label>Description</label>
                        <textarea>{book.desc}</textarea>
                    </div>

                    <div className="retailers">
                        <ul className="buy-links">
                            {book.links.map(item => (
                                <li key={item.id}>
                                    <a className="button" href={item.url} target="_blank">{item.id}</a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
                <div className="controls">
                    <button className="btn">Save Entry</button>
                    <button className="btn warning" onClick={() => removeBook(bookID)}>Delete Entry</button>
                </div>

            </article>



        )
    }
}
export { Book }
