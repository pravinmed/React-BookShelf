// Shows all the book shelf -> BookShelf -> Book.

import React from 'react';
import Book from './Book';
import BookShelf from './BookShelf';
import {Link} from 'react-router-dom';


class ListAllBooks extends React.Component
{
  
    render()
    {
        const Reading = this.props.books.filter((book) => book.shelf === 'currentlyReading');
        const Read = this.props.books.filter((book) => book.shelf === 'read');
        const want = this.props.books.filter((book) => book.shelf === 'wantToRead');

        return (
            <div className="list">
            <div className="listBooks" >
                <ul>      
                  <li>
                      <div className ="Reading" >
                    
                       <BookShelf booksInShelf = {Reading} onChangeShelf = {this.props.onChangeShelf}  bookShelfTitle = "Currenty Reading"/>
                     </div>
                   </li>
                   <li>
                      <div className ="Read" >
                       <BookShelf booksInShelf = {want} onChangeShelf = {this.props.onChangeShelf}  bookShelfTitle = "Want to Read"/>
                     </div>
                   </li>
                   <li>
                      <div className ="Want" >
                       <BookShelf booksInShelf = {Read} onChangeShelf = {this.props.onChangeShelf} bookShelfTitle = "Done Reading"/>
                     </div>
                   </li>           
                </ul>

            </div>
             <div className="open-search">
              <Link to="/search">Add</Link>
            </div>
            </div>
        );
    }

}

export default ListAllBooks;