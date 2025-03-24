import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footerg';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Science from './pages/Science/Science';
import Technology from './pages/Technology/Technology';
import WomenInTech from './pages/WomenInTech/WomenInTech';
import SectionPage from './pages/SectionPage/SectionPage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/science" element={<Science />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/women-in-tech" element={<WomenInTech />} />
          <Route path="/routes/:category" element={<CategoryPage />} />
          <Route path="/section/:sectionName" element={<SectionPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
