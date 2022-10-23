import "./App.css";
import { React, useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getShelfBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      console.log(res);
    };
    getShelfBooks();
  }, []);

  const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    await BooksAPI.getAll().then((res) => {
      setBooks(res);
    });
  };
  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainPage booksData={books} onChangeShelfType={changeShelf} />
          }
        />
        <Route exact path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
