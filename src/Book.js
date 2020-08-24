import React from 'react';


class Book extends React.Component
{
    OnShelfChanged = (event) =>
    {
        const shelf = event.target.value;
        this.props.onChangeShelf(this.props.book, shelf);
    }
 
    render()
    {
        const {book} = this.props;
        let bookImg = book.imageLinks ? book.imageLinks.thumbnail: 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869-800x448.jpeg';
        return (
            <div className="book">
                 <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookImg}")` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.OnShelfChanged} value = {book.shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors ? book.authors.join(","):" - "}</div>                     
            </div>
        )
    }
}

export default Book;