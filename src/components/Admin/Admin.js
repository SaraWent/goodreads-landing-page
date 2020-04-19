import React, { Component } from 'react'
import { BookList } from "../Booklist";


class Admin extends Component {


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
                        books={books}
                    />

                </div>
            </main>

        );
    }
}

export { Admin };
