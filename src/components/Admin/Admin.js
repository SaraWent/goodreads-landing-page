import React, { Component } from 'react'
import { BookList } from "../Booklist";


class Admin extends Component {
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
                },
                {
                    isbn: '9781250139436',
                    imgurl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580724442l/29566048._SX98_.jpg',
                    title: 'PANDEMIC 1918',
                    author: 'Book2 Author',
                    desc: 'Book2 Description',
                    links: [
                        { id: 'Amazon', url: 'https://www.amazon.com/dp/10DIGITISBN' },
                        { id: 'B&N', url: 'http://www.barnesandnoble.com/s/13DIGITISBN' },
                        { id: 'BAM', url: 'https://www.booksamillion.com/product/13DIGITISBN' }
                    ]
                },
                {
                    isbn: '9781466882973',
                    imgurl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580724442l/29566048._SX98_.jpg',
                    title: 'A DISEASE APART',
                    author: 'Tony Gould',
                    desc: 'Book2 Description',
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

    removeBook = (bookIndex) => {
        const bookCopy = [...this.state.books]
        bookCopy.splice(bookIndex, 1)

        this.setState({
            books: bookCopy
        })
    }

    addNewBook = (book) => {
        const bookCopy = [...this.state.books, book]
        // do your magic
        this.setState({
            books: bookCopy
        })
    }

    render() {
        const { books } = this.state
        return (
            <main>
                <div class="container">

                    <BookList
                        addNewBook={this.addNewBook}
                        removeBook={this.removeBook}
                        addBook={this.addBook}
                        books={books}
                    />

                </div>
            </main>

        );
    }
}

export { Admin };
