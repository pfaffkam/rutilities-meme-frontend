import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const hasToken = !!Cookies.get('token');

  useEffect(() => {
    if (!hasToken) {
      navigate('/unautorized');
    }
  }, [hasToken]);

  return hasToken ? children : null;
};

export default PrivateRoute;
