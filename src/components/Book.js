import { React, useState } from "react";
import PropTypes from "prop-types";

export const Book = ({ book, onChangingShelf }) => {
  const [value, setValue] = useState("none");

  const changingShelfFromSearchPage = (event) => {
    setValue(event.target.value);
    onChangingShelf(book, event.target.value);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: book.imageLinks
              ? `url(${book.imageLinks.thumbnail})`
              : "",
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            onChange={(event) => {
              changingShelfFromSearchPage(event);
            }}
            value={book.shelf ? book.shelf : value}
          >
            <option disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title || "no title"}</div>
      <div className="book-authors">{book.authors || "no authors"}</div>
    </div>
  );
};
Book.prototype = {
  book: PropTypes.object.isRequired,
  onChangingShelf: PropTypes.func.isRequired,
};
export default Book;
