import { React, useEffect, useState } from "react";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const SearchPage = ({ booksData, onChangeShelfType }) => {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const updateInput = (searchWord) => {
    setInput(searchWord.trimStart());
  };
  let mainBooksIds = [];
  for (const book of booksData) {
    mainBooksIds[book.id] = book.shelf;
  }
  // whenever the input change the useEffect cb will be triggered
  useEffect(() => {
    if (input.length !== 0) {
      const searchResultBooks = async () => {
        await BooksAPI.search(input, 20)
          .then((res) => {
            // if the res object id is in the main books, add shelf type to the object
            // for (const book of res) {
            //   book.id in mainBooksIds && (book.shelf = mainBooksIds[book.id]);
            // }
            for (const searchBook of res) {
              for (const shelfBook of booksData) {
                if (searchBook.id === shelfBook.id) {
                  BooksAPI.get(searchBook.id).then((data) => {
                    data.shelf = shelfBook.shelf;
                  });
                  searchBook.shelf = shelfBook.shelf;
                  setSearchResult(res);
                }
              }
            }
            setSearchResult(res);
          })
          .catch(() => {
            setSearchResult([]);
          });
      };
      searchResultBooks();
    } else if (input.length === 0) {
      setSearchResult([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={input}
            onChange={(event) => updateInput(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResult.length > 0 ? (
            searchResult.map((book) => (
              <li key={book.id}>
                <Book book={book} onChangingShelf={onChangeShelfType} />
              </li>
            ))
          ) : input ? (
            <div className="no-current-books">
              no books for "{input}" keyword
            </div>
          ) : (
            <div className="no-current-books">no results</div>
          )}
        </ol>
      </div>
    </div>
  );
};
SearchPage.prototype = {
  booksData: PropTypes.object.isRequired,
  onChangeShelfType: PropTypes.func.isRequired,
};
export default SearchPage;
