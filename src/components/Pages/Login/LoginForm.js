import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import RegistrationForm from './RegistrationForm';
import PasswordResetForm from './PasswordResetForm';

import { useAuth0 } from '@auth0/auth0-react';

const LoginForm = () => {
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const [email, setEmail] = useState('username@example.com');
  const [password, setPassword] = useState('passwd');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await loginWithRedirect({
        redirect_uri: `${window.location.origin}/sort`,
        appState: { targetUrl: '/sort' }
      });
    } catch (error) {
      setError(error.message);
    }
  };
  const handleGoogleLogin = async () => {
    await loginWithRedirect({
      redirect_uri: `${window.location.origin}/sort`,
      appState: { targetUrl: '/sort' },
      connection: 'google-oauth2'
    });
  };

  const handleFacebookLogin = async () => {
    await loginWithRedirect({
      redirect_uri: `${window.location.origin}/sort`,
      appState: { targetUrl: '/sort' },
      connection: 'facebook'
    });
  };

  return (
    <div className="flex justify-center items-center h-[85vh]">
      {showPasswordReset ? (
        <PasswordResetForm setShowPasswordReset={setShowPasswordReset} />
      ) : showRegistration ? (
        <RegistrationForm setShowRegistration={setShowRegistration} />
      ) : (
        <form className="md:absolute bg-gray-700 rounded-lg p-4" onSubmit={handleSubmit}>
          <button className="mt-4 p-2 bg-red-700 max-w-[50vw] text-white rounded-lg" type="submit">
            Log in
          </button>
          <button className="mt-4 p-2 bg-red-700 max-w-[50vw] text-white rounded-lg" onClick={handleGoogleLogin}>
            Log in with Google
          </button>
          <button className="mt-4 p-2 bg-red-700 max-w-[50vw] text-white rounded-lg" onClick={handleFacebookLogin}>
            Log in with Facebook
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <label>
            <input className="mt-4 w-full max-w-[50vw] rounded focus:border-gray-600" placeholder=" Nick or Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <br />
          <label>
            <input className="mt-4 w-full max-w-[50vw] rounded" autoComplete="current-password" placeholder=" Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <br />
          <button className="mt-4 p-2 bg-red-700 w-full max-w-[50vw] text-white rounded-lg" type="submit">
            Log in
          </button>
          <div className="flex justify-between w-full">
            <div className="text-gray-400 mr-8" onClick={() => setShowPasswordReset(true)}>
              Forget password?
            </div>
            <div className="text-white" onClick={() => setShowRegistration(true)}>
              Register
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
