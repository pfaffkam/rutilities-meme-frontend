import React, { useState, useEffect } from 'react';
import Form from './Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RandomMeme from './RandomMeme';
import Cookies from 'js-cookie';
import { PacmanLoader } from 'react-spinners';

function Sort() {
  const [randomMeme, setRandomMeme] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formErrors, setFormErrors] = useState({
    category: true,
    type: true,
    isNsfw: true,
    isUncropped: true,
    isMeme: true
  });

  const [form, setForm] = useState({
    category: { id: '' },
    type: { id: '' },
    isNsfw: '',
    isUncropped: '',
    isMeme: ''
  });

  const token = Cookies.get('token');

  useEffect(() => {
    if (formSubmitted) {
      return;
    }
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.reykez.pl/api/memes/memes/random', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setRandomMeme(data);
        setLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [formSubmitted]);

  function handleChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setForm((prevForm) => {
      if (fieldName === 'category' || fieldName === 'type') {
        return {
          ...prevForm,
          [fieldName]: { id: fieldValue }
        };
      } else {
        return {
          ...prevForm,
          [fieldName]: fieldValue === 'true'
        };
      }
    });
    setFormErrors({
      ...formErrors,
      [fieldName]: !fieldValue
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://api.reykez.pl/api/memes/memes/${randomMeme.id}`, {
      method: 'PATCH',
      crossDomain: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        method: 'PATCH'
      },
      body: JSON.stringify(form)
    }).then((response) => {
      if (response.status === 200) {
        toast.success('Meme has been sorted!');
      } else {
        toast.error('Meme was not sorted, please contact support');
      }
      setFormSubmitted(true);
    });
  }

  return (
    <main>
      <div className="flex pt-20 justify-center flex-col items-center border shadow-md md:flex-row min-h-[85vh] border-gray-700 bg-gray-700">
        {loading ? <PacmanLoader color="orange" /> : <RandomMeme randomMeme={randomMeme} />}
        <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar={false} limit={1} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
        {isError || <Form setFormSubmitted={setFormSubmitted} formSubmitted={formSubmitted} form={form} setForm={setForm} formErrors={formErrors} setFormErrors={setFormErrors} handleChange={handleChange} handleFormSubmit={handleSubmit} />}
      </div>
    </main>
  );
}

export default Sort;
