import React, { Component } from 'react'
import { DisplayBook } from '../DisplayBook'



class DisplayBookList extends Component {

    render() {
        const {
            books,
            removeBook
        } = this.props
        return (
            <div>
                {
                    books.map((book, index) => {
                        return (
                            <DisplayBook
                                key={`${book.isbn}-${index}`}
                                book={book}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export { DisplayBookList };