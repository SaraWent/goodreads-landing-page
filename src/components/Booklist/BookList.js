// List of books, function to add from Goodreads, Function to Remove from List, Edit Book on List
// Todos:
// Add loading animation/text
// Add error message so program doesn't crash
// Make landing page reflect booklist
// Host on github
// Connect to Firebase
// Make all inputs editable
// Add/delete retailer links
// Create multi-user login system
// Generate multiple pages per user and manage from a admin panel



import React, { Component } from 'react'
import Axios from 'axios';
import Convert from 'xml-js';
import { Book } from '../Book';



class BookList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            newBookInput: '',
            errorMSG: '',
            fetchingData: false
        }
    }

    handleChange = (e) => {
        this.setState({
            newBookInput: e.target.value
        })
    }
    handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            const apiKey = process.env.REACT_APP_API_KEY;
            // 9781250118004
            // 9781250012210
            // 9781429979351
            // 9781250139092 This one throws an error!!
            const isbn = this.state.newBookInput;
            const requestUri =
                `https://cors-anywhere.herokuapp.com/` +
                `https://www.goodreads.com/book/isbn/${isbn}?key=${apiKey}`;
            Axios.get(requestUri)
                .then((res) => {

                    const data = JSON.parse(
                        Convert.xml2json(res.data, { compact: true, spaces: 2 })
                    );
                    console.log(data.GoodreadsResponse.book);

                    const { addNewBook } = this.props
                    addNewBook({
                        isbn: isbn,
                        imgurl: data.GoodreadsResponse.book.image_url._text,
                        title: data.GoodreadsResponse.book.title._cdata,
                        author: data.GoodreadsResponse.book.authors.author.name._text,
                        desc: data.GoodreadsResponse.book.description._cdata,
                        links: [
                            { id: 'Amazon', url: "https://www.amazon.com/dp/" + data.GoodreadsResponse.book.isbn._cdata },
                            { id: 'B&N', url: "http://www.barnesandnoble.com/s/" + data.GoodreadsResponse.book.isbn13._cdata },
                            { id: 'BAM', url: "https://www.booksamillion.com/product/" + data.GoodreadsResponse.book.isbn13._cdata },
                            { id: 'IndieBound', url: "https://www.indiebound.org/book/" + data.GoodreadsResponse.book.isbn13._cdata },
                            { id: 'Powells', url: "https://www.powells.com/book/-" + data.GoodreadsResponse.book.isbn13._cdata }
                        ]
                    })
                    this.setState({
                        errorMSG: "",
                        newBookInput: "",
                        fetchingData: true
                    });


                }, (error) => {
                    console.log(error);
                    this.setState({
                        errorMSG: "Invalid Entry",
                        newBookInput: "",
                        fetchingData: false
                    });
                });



        }


    }

    render() {
        const { books, removeBook } = this.props;
        const { errorMSG } = this.state;


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
                        <span class="error">{errorMSG}</span>
                    </div>
                </article>
            </div>
        )
    }
}

export { BookList };