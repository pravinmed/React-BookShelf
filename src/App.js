import React from 'react'
 import * as BooksAPI from './BooksAPI'
 import ListAllBooks from './ListAllBooks'
 import SearchBooks from './SearchBooks'
 import {Route} from 'react-router-dom'
import './App.css'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }

  componentDidMount()
  {
    BooksAPI.getAll().then(books => {this.setState({books: books})});
  }

  onChangeShelf = (book, shelf) =>
  {
    console.log(shelf);
    book.shelf = shelf;
    const bookList = this.state.books.filter(bk => (bk.id !== book.id)).concat([book]);
    this.setState({ books: bookList});
    BooksAPI.update(book, shelf);
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" 
        render = {({history}) => (
          <SearchBooks onChangeShelf= {this.onChangeShelf}
          history = {history}
        books = {this.state.books} /> ) } />

        <Route path ="/" exact render = {()=>(
          <div>
          <div className="Myread"> <h1>My Books </h1> </div>
          <ListAllBooks books = {this.state.books} />
          </div>
        )} />
      </div>
    )

  }
}

export default BooksApp
