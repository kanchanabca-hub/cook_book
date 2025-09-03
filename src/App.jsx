import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoriesHome from "./components/CategoriesHome";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </Router>
  );
}

export default App;
