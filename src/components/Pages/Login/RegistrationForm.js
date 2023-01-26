import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import withLanguage from '../../HOC/withLanguage';

const RegistrationForm = ({ texts, setShowRegistration }) => {
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
    if (!password || password.length < 8 || !/[^A-Za-z0-9]/.test(password)) {
      setError('Password must be at least 8 characters long and contain at least one special character');
      return;
    }
    try {
      console.log(user, email, password);
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}users/users`, {
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
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className=" bg-gray-700 rounded-lg p-4 w" onSubmit={handleSubmit}>
      {error && <p className="text-red-500 text-sm mb-8 w-48 ">{error}</p>}
      {/* <div className="relative z-0 w-full mb-6">
        <input type="text" name="floating_text" id="floating_text" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required value={user} onChange={(event) => setUser(event.target.value)} />
        <label htmlFor="floating_text" className="peer-focus:font-medium absolute text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          User name
        </label>
      </div> */}
      <div className="relative z-0 w-full mb-6">
        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          {texts.email}
        </label>
      </div>
      <div className="relative z-0 w-full mb-6">
        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required value={password} onChange={(event) => setPassword(event.target.value)} />
        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          {texts.password}
        </label>
      </div>
      <div className="relative z-0 w-full mb-6">
        <input type="password" name="floating_password_confirm" id="floating_password_confirm" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-100 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        <label htmlFor="floating_password_confirm" className="peer-focus:font-medium absolute text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          {texts.confirmPassword}
        </label>
      </div>

      <button className="mt-4 p-2 bg-red-600 w-full disabled:opacity-60 max-w-[50vw] text-white rounded-lg" type="submit" disabled={!user || !email || !password || !confirmPassword}>
        {texts.register}
      </button>
      <button type="button" className="text-white mt-2 cursor-pointer" onClick={() => setShowRegistration(false)}>
        {texts.back}
      </button>
    </form>
  );
};

export default withLanguage(RegistrationForm);
