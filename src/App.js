import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
