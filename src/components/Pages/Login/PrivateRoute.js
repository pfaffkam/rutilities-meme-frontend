import { useLocation, useNavigate } from 'react-router';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const hasToken = !!Cookies.get('token');

  if (hasToken) {
    return children;
  }
  navigate('/unautorized', { state: { from: location } });
};

export default PrivateRoute;
