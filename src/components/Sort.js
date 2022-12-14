import { useEffect, useState, useRef } from 'react';

function Sort() {
  const [state, setState] = useState({
    randomMeme: [],
    categories: [],
    type: []
  });
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
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categorySelectRef = useRef();
  const typeSelectRef = useRef();

  useEffect(() => {
    Promise.all([
      fetch('https://api.reykez.pl/api/memes/memes/random', {
        method: 'GET',
        headers: {
          Accept: 'application/x-www-form-urlencoded'
        }
      }),
      fetch('https://api.reykez.pl/api/memes/meme-categories', {
        method: 'GET',
        headers: {
          Accept: 'application/x-www-form-urlencoded'
        }
      }),
      fetch('https://api.reykez.pl/api/memes/meme-types', {
        method: 'GET',
        headers: {
          Accept: 'application/x-www-form-urlencoded'
        }
      })
    ])
      .then((responses) => Promise.all(responses.map((response) => response.json())))
      .then((data) => {
        const [randomMeme, categories, type] = data;
        const categoriesDuration = categories._embedded.items;
        const typeDuration = type._embedded.items;
        setState((prevState) => ({
          ...prevState,
          randomMeme: randomMeme,
          categories: categoriesDuration,
          type: typeDuration
        }));
      });
  }, []);

  useEffect(() => {
    if (formSubmitted) {
      setFormErrors({
        category: true,
        type: true,
        isNsfw: true,
        isUncropped: true,
        isMeme: true
      });
      setForm({
        category: { id: '' },
        type: { id: '' },
        isNsfw: '',
        isUncropped: '',
        isMeme: ''
      });
      fetch('https://api.reykez.pl/api/memes/memes/random', {
        method: 'GET',
        headers: {
          Accept: 'application/x-www-form-urlencoded'
        }
      })
        .then((response) => response.json())
        .then((randomMeme) => {
          setState((prevState) => ({
            ...prevState,
            randomMeme: randomMeme
          }));
        });
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

  console.log(form);

  function handleChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    if (fieldName === 'category' || fieldName === 'type') {
      setForm({
        ...form,
        [fieldName]: { id: fieldValue }
      });
    } else {
      setForm({
        ...form,
        [fieldName]: fieldValue === 'true'
      });
    }

    setFormErrors({
      ...formErrors,
      [fieldName]: !fieldValue
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const hasEmptyFields = Object.values(formErrors).some((error) => error);
    if (hasEmptyFields) {
      alert('Wszystkie pola są wymagane!');
      return false;
    }
    console.log(state.randomMeme.id, 'xd');
    fetch(`https://api.reykez.pl/api/memes/memes/${state.randomMeme.id}`, {
      method: 'PATCH',
      crossDomain: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        method: 'PATCH'
      },
      body: JSON.stringify(form)
    })
      .then((response) => response.json())
      .then((updatedMeme) => {
        console.log('Nowe dane mema:', updatedMeme);
      })
      .catch((error) => console.log(error));
    console.log(JSON.stringify(form));
    console.log('Wysłano');
    categorySelectRef.current.value = 'Kategoria';
    typeSelectRef.current.value = 'Typ';
    setFormSubmitted(true);
  }

  function Button({ hasEmptyFields }) {
    return (
      <>
        <button id="submit" type="submit" disabled={!hasEmptyFields} className="flex mt-3 mb-4 bg-gray-300 hover:bg-gray-400  disabled:opacity-25  text-gray-800 font-bold py-2 px-4 rounded-full" onClick={handleSubmit}>
          Sortuj!
        </button>
        {!hasEmptyFields && (
          <p className="text-red-300">
            Musisz wybrać pole,
            <br />
            aby aktywować przycisk.
          </p>
        )}
      </>
    );
  }

  function BooleanChooseField({ fieldName, idValueDictionary }) {
    return (
      <ul className="flex gap-8 w-full ">
        {idValueDictionary.map((option) => {
          return (
            <li>
              <p className="mb-5"></p>
              <input type="radio" className="hidden peer mb-5" name={fieldName} Checked={false} id={option.id} value={option.value} onChange={handleChange} />
              <p className="text-red-300">{formErrors[fieldName] ? 'Wybierz opcję' : ''}</p>
              <label htmlFor={option.id} className="inline-flex max-md:flex justify-between items-center border box-border h-16 w-32 p-4  text-gray-500 bg- rounded-lg cursor-pointer dark:hover:text-gray-300  dark:border-blue-900 checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-200 hover:bg-gray-900 dark:text-gray-400 dark:bg-gray-900   dark:hover:border-green-400 ">
                <div className="block">
                  <div className="w-full text-lg font-semibold flex-nowrap">Kategoria</div>
                  <div className="w-full">{option.text}</div>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <>
      <main className="bg-gray-600 flex justify-center  min-h-screen min-w-64">
        <a href="##" className="flex flex-col items-center rounded-lg border shadow-md  m-4 pr-8 pt-12 md:flex-row md:max-w-auto border-gray-700 bg-gray-700">
          <img className="rounded-t-lg  max-h-[80vh] h-[50vh]  w-[50vh] m-16  md:rounded  border-4" src={state.randomMeme.url} alt="random mem" />
          {console.log('ilosc wywolan:')}
          <div className="flex flex-col justify-between mb-28 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-amber-700 ">Sortowanie memów</h5>
            <div className="mb-3">
              <form name="Form" onSubmit={handleSubmit} noValidate>
                <p className="text-red-300">{formErrors['category'] ? 'Wybierz kategorię' : ''}</p>
                <select name="category" ref={categorySelectRef} className="flex mt-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full" ```````````````````````````````````````````````````````````````onChange={handleChange}``````````````````````````````````````````````````````````````` defaultValue="Kategoria">
                  <option value="Kategoria" disabled>
                    Kategoria
                  </option>
                  {state.categories.map((item, i) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.id}
                      </option>
                    );
                  })}
                </select>
                <p className="text-red-300">{formErrors['type'] ? 'Wybierz typ' : ''}</p>
                <select name="type" ref={typeSelectRef} className="flex mt-3 mb-6 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full" onChange={handleChange} defaultValue="Typ">
                  <option value="Typ" disabled>
                    Typ
                  </option>
                  {state.type.map((item, i) => {
                    return (
                      <option key={i} value={item.id}>
                        {item.id}
                      </option>
                    );
                  })}
                </select>
                <BooleanChooseField
                  fieldName="isNsfw"
                  idValueDictionary={[
                    { id: 'sfw', value: true, text: 'Bezpieczny' },
                    { id: 'nsfw', value: false, text: 'Niebezpieczny' }
                  ]}
                />
                <BooleanChooseField
                  fieldName="isUncropped"
                  idValueDictionary={[
                    { id: 'cropped', value: true, text: 'Przycięty' },
                    { id: 'uncropped', value: false, text: 'Nieprzycięty' }
                  ]}
                />
                <BooleanChooseField
                  fieldName="isMeme"
                  idValueDictionary={[
                    { id: 'meme', value: true, text: 'Mem' },
                    { id: 'notmeme', value: false, text: 'coś innego' }
                  ]}
                />
                <Button hasEmptyFields={!Object.values(formErrors).some((error) => error)} />
              </form>
            </div>
          </div>
        </a>
      </main>
    </>
  );
}

export default Sort;
