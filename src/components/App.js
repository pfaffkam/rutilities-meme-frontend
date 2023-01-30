import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sort from '../Pages/Sort/Sort';
import LoginForm from '../Pages/Login/LoginForm';
import { PrivateRoute } from '../Pages/Login/PrivateRoute';
import Unauthorized from './Unauthorized';
import Missing from './Missing';
import BrowsingMemes from '../Pages/Home/BrowsingMemes';
import { MainLayout } from '../Layouts//MainLayout';
console.log('xd');
const ROLES = {
  User: 'ROLE_USER',
  Admin: 'ROLE_SUPER_USER'
};
function atLayout(Component) {
  return (
    <div className="bg-gray-600 h-screen w-screen">
      <MainLayout>
        <Component />
      </MainLayout>
    </div>
  );
}

export function App() {
  return (
    <Routes>
      {/* Without roles */}
      <Route path="login" element={atLayout(LoginForm)} />
      <Route path="unauthorized" element={atLayout(Unauthorized)} />
      <Route path="*" element={atLayout(Missing)} />
      <Route path="home" element={atLayout(BrowsingMemes)} />
      {/*Role user*/}
      <Route element={<PrivateRoute allowedRoles={ROLES.User} />}>
        <Route path="sort" element={atLayout(Sort)} />
      </Route>
    </Routes>
  );
}
