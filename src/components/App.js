import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sort from './Pages/Sort/Sort';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="sort" element={<Sort />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
