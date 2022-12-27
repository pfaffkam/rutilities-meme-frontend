import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sort from './Pages/Sort/Sort';
import BrowsingMemes from './Pages/Home/BrowsingMemes';

function App() {
  return (
    <div className="bg-gray-600 h-screen w-auto">
      <Router>
        <Header />
        <Routes>
          <Route path="sort" element={<Sort />} />
          <Route path="home" element={<BrowsingMemes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
