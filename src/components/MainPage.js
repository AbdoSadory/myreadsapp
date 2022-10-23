import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import BookShelf from "./BookShelf";
export const MainPage = ({ booksData, onChangeShelfType }) => {
  let books = booksData;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            bookShelfTitle="Currently Reading"
            bookShelfBooks={books.filter(
              (book) => book.shelf === "currentlyReading"
            )}
            onChangeShelfType={onChangeShelfType}
          />
          <BookShelf
            bookShelfTitle="Want to Read"
            bookShelfBooks={books.filter((book) => book.shelf === "wantToRead")}
            onChangeShelfType={onChangeShelfType}
          />
          <BookShelf
            bookShelfTitle="Read"
            bookShelfBooks={books.filter((book) => book.shelf === "read")}
            onChangeShelfType={onChangeShelfType}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};
export default MainPage;
