import React, { useState } from 'react';
import Meme from '../api/Meme';

const MyForm = () => {
  const [values, setValues] = React.useState({
    category: 'Null',
    type: 'Null',
    isNsfw: 'Null',
    isUncropped: 'Null',
    isMeme: 'Null'
  });
  const [validations, setValidations] = React.useState({
    category: '',
    type: '',
    isNsfw: '',
    isUncropped: '',
    isMeme: ''
  });

  const validateAll = () => {
    const { category, type, isNsfw, isUncropped, isMeme } = values;
    const validations = { category: '', type: '', isNsfw: '', isUncropped: '', isMeme: '' };
    let isValid = true;
    if (category == 'Null') {
      validations.category = 'Wybierz jedną z opcji!';
      isValid = false;
    } else {
      console.log('Wybrano odpowiednią opcje!');
    }
    if (type == 'null') {
      console.log('Wybierz jedną z opcji!');
      isValid = false;
    } else {
      console.log('Wybrano odpowiednią opcje!');
    }
    if (isNsfw !== 'false' || 'true') {
      console.log('Wybierz jedną z opcji!');
      isValid = false;
    } else {
      console.log('Wybrano odpowiednią opcje!');
    }
    if (isUncropped !== 'false' || 'true') {
      console.log('Wybierz jedną z opcji!');
      isValid = false;
    } else {
      console.log('Wybrano odpowiednią opcje!');
    }
    if (isMeme !== 'false' || 'true') {
      console.log('Wybierz jedną z opcji!');
      isValid = false;
    } else {
      console.log('Wybrano odpowiednią opcje!');
    }
    return isValid;
  };

  const handleChange = (e) => {
    console.log('im handle change');
    const { category, value } = e.target;
    setValues({ ...values, [category]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateAll();
    console.log('i live');
    console.log('Inpit name', e.target.category);
    console.log('Inpit name', e.target.categoryVal);
    console.log('Inpit name', e.target.type);
    console.log('Inpit name', e.target.typeVal);

    if (!isValid) {
      setValidations(validations);
    }

    return isValid;
  };
  const { category, type, isNsfw, isMeme, isUncropped } = values;
  const { category: categoryVal, type: typeVal, isNsfw: isNsfwVal, isMeme: isMemeVal, isUncropped: isUncroppedVal } = validations;

  return console.log('gdzie to łazi dwa razy');
};

let patchMeme;

// patchMeme['category'] = { id: categoryId };
// patchMeme['type'] = { id: typeId };

// fetch('https://api.reykez.pl/api/memes/memes/1', {
//   method: 'PATCH',
//   crossDomain: true,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     _method: 'PATCH'
//   },
//   body: JSON.stringify({ patchMeme })
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

function Sort() {
  return (
    <>
      <main className="bg-gray-600 flex justify-center h-[90vh]">
        <a href="#" className="flex flex-col items-center  rounded-lg border shadow-md md:flex-row md:max-w-auto border-gray-700 bg-gray-700 ">
          <Meme />
          <div className="flex flex-col justify-between pb-28 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-amber-700 ">Sortowanie memów</h5>
            <div className="mb-4">
              <form name="MyForm" className="" action={MyForm()} method="PATCH" onClick={MyForm.handleSubmit}>
                <select name="category" value={MyForm.values} className="flex bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full" defaultValue="Kategoria">
                  <option disabled>Kategoria</option>
                  <option name="category" value="Animals">
                    Zwierzęta
                  </option>
                  <option name="category" value="Dark_Humor">
                    Czarny humor
                  </option>
                  <option name="category" value="Joke">
                    Żarty
                  </option>
                  <option name="category" value="Nigger">
                    Czarnuchy
                  </option>
                  <option name="category" value="Other">
                    Inne
                  </option>
                  <option name="category" value="Political">
                    Polityka
                  </option>
                  <option name="category" value="Sample">
                    Sample
                  </option>
                  <option name="category" value="W0man">
                    Kobiety
                  </option>
                </select>
                <select name="type" value={MyForm.values} className="flex mt-3 mb-6 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full" defaultValue="Typ">
                  <option disabled>Typ</option>
                  <option name="type" value="Hard">
                    Ciężkie
                  </option>
                  <option name="type" value="Medium">
                    Średnie
                  </option>
                  <option name="type" value="Soft">
                    Lekkie
                  </option>
                </select>
                <div>{MyForm.categoryVal}</div>
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">wybierz poszczególne opcje żeby posortować mem...</h3>
                <ul className="grid gap-6 w-full md:grid-cols-2">
                  <li>
                    <input type="radio" className="hidden peer" name="isNsfw" id="sfw" autoComplete="off" value="false" onChange={MyForm.handleChange} required="" />
                    <label htmlFor="sfw" className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-900 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Kategoria</div>
                        <div className="w-full">SFW</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input type="radio" className="hidden peer" name="isNsfw" id="nsfw" autoComplete="off" value="true" onChange={MyForm.handleChange} required="" />
                    <label htmlFor="nsfw" className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-900 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Kategoria</div>
                        <div className="w-full">NSFW</div>
                      </div>
                    </label>
                  </li>
                </ul>
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white"></h3>
                <ul className="grid gap-6 w-full md:grid-cols-2">
                  <li>
                    <input type="radio" className="hidden peer" name="isUncropped" id="cropped" autoComplete="off" value="false" onChange={MyForm.handleChange} required="" />
                    <label htmlFor="cropped" className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-900 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Kategoria</div>
                        <div className="w-full">Cropped</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input type="radio" className="hidden peer" name="isUncropped" id="uncropped" autoComplete="off" value="true" onChange={MyForm.handleChange} required="" />
                    <label htmlFor="uncropped" className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-900 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Kategoria</div>
                        <div className="w-full">Uncropped</div>
                      </div>
                    </label>
                  </li>
                </ul>
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white"></h3>
                <ul className="grid gap-6 w-full md:grid-cols-2">
                  <li>
                    <input type="radio" className="hidden peer" name="isMeme" id="meme" autoComplete="off" value="false" onChange={MyForm.handleChange} required="" />
                    <label htmlFor="meme" className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-900 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Kategoria</div>
                        <div className="w-full">Meme</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input type="radio" className="hidden peer" name="isMeme" id="notmeme" autoComplete="off" value="true" onChange={MyForm.handleChange} required="" />
                    <label htmlFor="notmeme" className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-900 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Kategoria</div>
                        <div className="w-full">Not Meme</div>
                      </div>
                    </label>
                  </li>
                </ul>

                <button id="submit" type="submit" className="flex mt-3 mb-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full" onClick={MyForm.handleSubmit}>
                  Sortuj!
                </button>
              </form>
            </div>
          </div>
        </a>
      </main>
    </>
  );
}
export default Sort;
