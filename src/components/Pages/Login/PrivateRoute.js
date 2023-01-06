import { useLocation, useNavigate } from 'react-router';
import LoginForm from './LoginForm';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!!Cookies.get('token')) {
    return children;
  }
  navigate('/login', { state: { from: location } });

  return (
    <>
      <h1 className="text-red-400 text-center">If you want to continue you have to log in </h1>
      <LoginForm />
    </>
  );
};

export default PrivateRoute;
