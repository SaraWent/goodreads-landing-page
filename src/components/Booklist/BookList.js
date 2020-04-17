// List of books, function to add from Goodreads, Function to Remove from List, Edit Book on List

import React, { Component } from 'react'
import { Book } from "../Book";

class BookList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            newBookInput: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            newBookInput: e.target.value
        })
    }
    handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            const { addNewBook } = this.props
            addNewBook({
                isbn: this.state.newBookInput,
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
            })

        }

    }

    render() {
        const {
            books,
            removeBook
        } = this.props

        const { newBookInput } = this.state

        return (
            <div>
                {
                    books.map((book, index) => {
                        return (
                            <Book
                                removeBook={removeBook}
                                key={`${book.isbn}-${index}`}
                                book={book}
                                bookID={index} />
                        )
                    })
                }
                <article class="book-cont item">
                    <div class="form-input">
                        <label>Add New Item by ISBN</label>

                        <input
                            type="text"
                            placeholder="Enter ISBN"
                            onChange={this.handleChange}
                            onKeyUp={this.handleKeyUp}
                        />

                        <div class="controls">
                            <button class="btn" >Submit</button>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export { BookList };