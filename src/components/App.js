import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Sort from './Pages/Sort/Sort';
import LoginForm from './Pages/Login/LoginForm';
import PrivateRoute from './Pages/Login/PrivateRoute';
import Unauthorized from './Unauthorized';
import Missing from './Missing';
import BrowsingMemes from './Pages/Home/BrowsingMemes';

const ROLES = {
  User: 'ROLE_USER',
  Admin: 'ROLE_SUPER_USER'
};

function App() {
  return (
    <div className="bg-gray-600 h-screen w-screen">
      <Header />
      <Routes>
        {/* Without roles */}
        <Route path="login" element={<LoginForm />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Missing />} />
        <Route path="home" element={<BrowsingMemes />} />
        {/*Role user*/}
        <Route element={<PrivateRoute allowedRoles={ROLES.User} />}>
          <Route path="sort" element={<Sort />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
