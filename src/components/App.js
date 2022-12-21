import * as React from 'react';
import Header from './Header';
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
      </Router>
    </>
  );
}

export default App;
