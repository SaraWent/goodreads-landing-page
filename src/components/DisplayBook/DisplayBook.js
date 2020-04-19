import React, { Component } from 'react'

class DisplayBook extends Component {

    render() {
        const {
            book,
        } = this.props
        return (


            <article class="book-cont">
                <div class="book-img">

                    <img src={book.imgurl} />
                </div>
                <div class="book-desc">
                    <h3 class="bk-title">{book.title}</h3>
                    <h4 class="author">{book.author}</h4>

                    <span class="bk-desc">
                        <b>{book.desc}</b>
                    </span>
                    <div class="retailers">
                        <ul class="buy-links">
                            {book.links.map(item => (
                                <li key={item.id}>
                                    <a class="button" href={item.url} target="_blank">{item.id}</a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

            </article>



        )
    }
}
export { DisplayBook }
