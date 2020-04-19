import React, { Component } from 'react'
import { DisplayBook } from '../DisplayBook'



class DisplayBookList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newBookInput: '',
            errorMSG: '',
            fetchingData: false
        }
    }

    render() {
        const { books, } = this.props
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