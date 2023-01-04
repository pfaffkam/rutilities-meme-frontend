import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sort from './Pages/Sort/Sort';
import LoginForm from './Pages/Login/LoginForm';
import PrivateRoute from './Pages/Login/PrivateRoute';
import Unautorized from './Unautorized';

function App() {
  return (
    <div className="bg-gray-600 h-screen w-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="login" element={<LoginForm />} />
          <Route path="unautorized" element={<Unautorized />} />
          <Route
            path="/sort"
            element={
              <PrivateRoute>
                <Sort />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
