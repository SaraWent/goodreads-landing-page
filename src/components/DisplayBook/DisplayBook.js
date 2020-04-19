import React, { Component } from 'react'

class DisplayBook extends Component {

    render() {
        const {
            book,
        } = this.props
        return (


            <article className="book-cont">
                <div className="book-img">

                    <img src={book.imgurl} alt={book.title} />
                </div>
                <div className="book-desc">
                    <h3 className="bk-title">{book.title}</h3>
                    <h4 className="author">{book.author}</h4>

                    <span className="bk-desc">
                        <b>{book.desc}</b>
                    </span>
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

            </article>



        )
    }
}
export { DisplayBook }
