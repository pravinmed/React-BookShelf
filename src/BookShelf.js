// This is to keep the bookshelf , passed to the book for each book for displaying.


import React from 'react';
import {Link} from 'react-router-dom';
import ListAllBooks from './ListAllBooks';
import Book from './Book';


class BookShelf extends React.Component
{
    
    render(){
        return (
            <div className="shelf">
                    <h2>
                        {this.props.bookShelfTitle}
                    </h2>
                <div className="bookshelf">
                   <ul className="books-grid">
                    {this.props.booksInShelf.map(book => {
                        return <li><Book book = {book} onChangeShelf = {this.props.onChangeShelf}/></li>
                    })}
                   </ul>
                </div>
            </div>
        )
    }
    
}

export default BookShelf;