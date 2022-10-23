import { React } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

export const BookShelf = ({
  bookShelfTitle,
  bookShelfBooks,
  onChangeShelfType,
}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookShelfBooks.length > 0 ? (
            bookShelfBooks.map((book) => (
              <li key={book.id}>
                <Book book={book} onChangingShelf={onChangeShelfType} />
              </li>
            ))
          ) : (
            <div className="no-current-books">no books here in this shelf</div>
          )}
        </ol>
      </div>
    </div>
  );
};
BookShelf.prototype = {
  bookShelfTitle: PropTypes.string.isRequired,
  bookShelfBooks: PropTypes.array.isRequired,
  onChangeShelfType: PropTypes.func.isRequired,
};
export default BookShelf;
