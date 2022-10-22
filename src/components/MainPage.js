import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
export const MainPage = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {/* Shelf */}
          <BookShelf bookShelfTitle="Currently Reading" />
          {/* Shelf */}
          <BookShelf bookShelfTitle="Want to Read" />
          {/* Shelf */}
          <BookShelf bookShelfTitle="Read" />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};
export default MainPage;
