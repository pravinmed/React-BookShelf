// Show the seach page. 
// ip is the text .
// op is the search results

import React from 'react';
import {Link} from 'react-router-dom';
import Book from  './Book';
import * as BooksAPI from './BooksAPI';
import {Route} from 'react-router-dom'



class SearchBooks extends React.Component
{
     state = {
         searchResults :[]
     }

    
     searchBooks = (e) =>
     {
         const query = e.target.value;
         console.log(query);
         if (!query){
             this.setState({searchResults: []});
             return;
         }
         BooksAPI.search(query).then(searchRes => 
            {
                if (!searchRes || searchRes.error)
                 {
                     return;
                 } else {
                    searchRes = searchRes.map((book) => 
                    {
                       const shelfBooks =  this.props.books.find(bk =>(bk.id === book.id));
                        book.shelf = shelfBooks ? shelfBooks.shelf : "none";
                        return book;
                    });
                    this.setState({searchResults: searchRes});
                 }
            }
         )
     }
     

     render()
     {
         return (
            <div className="search-books">
            <div className="search-books-bar">
            <div className="search-books-input-wrapper">
                {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text"
                 placeholder="Search by title or author"
                 onChange = {this.searchBooks}
                 />
                
                <div className="close">
                <Link to="/">Back </Link>
            </div>
            </div>
          
            </div>
           
            <div className="search-books-results">
                <ul className="books-grid">
                  {
                      this.state.searchResults && this.state.searchResults.map((book,indx) => (
                        <li key = {book.id + indx}>
                            <Book book= {book} onChangeShelf = {this.props.onChangeShelf} />
                        </li>
                      ))
                  }
                  </ul>
                  
            </div>
         
        </div>
         );
     }
}

export default SearchBooks;