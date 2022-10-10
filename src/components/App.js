import * as React from 'react';
import Header from './Header';
import Home from './pages/Home';
import Generate from './pages/Generate';
import Random from './pages/Random';
import Sort from './pages/Sort';
import Search from './pages/Search';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Header /> */}

      <Router>
        {/* here sample menu */}
        <Header />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="generate" element={<Generate />} />
          <Route path="search" element={<Search />} />
          <Route path="random" element={<Random />} />
          <Route path="sort" element={<Sort />} />
        </Routes>
      </Router>

      {/* <Footer /> */}
    </>
  );
}

export default App;
