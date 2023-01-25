import { useContext } from 'react';
import AuthContext from '../components/context/AuthProvider';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
