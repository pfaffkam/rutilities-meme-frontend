import { useLocation, useNavigate } from 'react-router';
import LoginForm from './LoginForm';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const hasToken = !!Cookies.get('token');

  if (hasToken) {
    return children;
  }
  navigate('/login', { state: { from: location } });

  return (
    <>
      <h1 className="text-red-400 text-center">If you wanna continue you have to log in </h1>
      <LoginForm />
    </>
  );
};

export default PrivateRoute;
