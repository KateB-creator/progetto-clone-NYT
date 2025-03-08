import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import WomenInTech from './pages/WomenInTech';
import Science from './pages/Science';
import Technology from './pages/Technology';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/science" element={<Science />} />
          <Route path="/women-in-tech" element={<WomenInTech />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
