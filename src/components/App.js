import * as React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes,} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        </Routes>
      </Router>
    </>
  );
}

export default App;
