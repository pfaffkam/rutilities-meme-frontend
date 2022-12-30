import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const RegistrationForm = (props) => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('https://api.reykez.pl/api/users/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, email, password })
      });
      console.log(JSON.stringify({ user, email, password }));
      if (!response.ok) {
        throw new Error('Fail register try again');
      }
      const { token } = await response.json();
      Cookies.set('token', token);
      navigate('/sort');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="md:absolute bg-gray-700 rounded-lg p-4" onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      <label>
        <input className="mt-4 w-full max-w-[50vw] rounded focus:border-gray-600" placeholder="User name" type="text" value={user} onChange={(event) => setUser(event.target.value)} />
      </label>
      <br />
      <label>
        <input className="mt-4 w-full max-w-[50vw] rounded focus:border-gray-600" placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        <input className="mt-4 w-full max-w-[50vw] rounded" autoComplete="new-password" placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <label>
        <input className="mt-4 w-full max-w-[50vw] rounded" autoComplete="new-password" placeholder="Confirm Password" type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
      </label>
      <br />
      <button className="mt-4 p-2 bg-red-600 w-full disabled:opacity-60 max-w-[50vw] text-white rounded-lg" type="submit" disabled={!user || !email || !password || !confirmPassword}>
        Register
      </button>
      <button type="button" className="text-white mt-2 cursor-pointer" onClick={() => props.setShowRegistration(false)}>
        Back to login form
      </button>
    </form>
  );
};

export default RegistrationForm;
