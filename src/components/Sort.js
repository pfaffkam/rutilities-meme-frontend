import { useEffect, useState } from 'react';
import Meme from '../api/Meme';
import Form from './Form';

function Sort() {
  const [category, setCategory] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  useEffect(async () => {
    const result = await fetch('https://api.reykez.pl/api/memes/meme-categories');
    setCategory(result);
    console.log('result', result);
    const categoryId = result;

    const { items = [] } = await setCategory(['_embedded']['items']);

    setCategoryItems(items);
  });

  function validateFormData(formDataObject) {
    console.log(formDataObject);
    if (formDataObject.isNsfw == null) return false;
    if (formDataObject.isUncropped == null) return false;
    if (formDataObject.isMeme == null) return false;
    return true;
  }

  function handleSubmit(event) {
    event.preventDefault();

    let data = new FormData(event.target);
    let formObject = Object.fromEntries(data.entries());

    let isValidated = validateFormData(formObject);
    if (!isValidated) {
      console.log('nie jest to szmato zwalidowane');
      // throw error that will display proper message on the website (in an form)
    }

    console.log(formObject.isNsfw);
    console.log(formObject.isUncropped);
    console.log(formObject.isMeme);
    // pass values into new object that will be sent to the API.

    console.log('Kliknięto sortuj');
  }

  return (
    <>
      <main className="bg-gray-600 flex justify-center h-[90vh]">
        <a href="#" className="flex flex-col items-center  rounded-lg border shadow-md md:flex-row md:max-w-auto border-gray-700 bg-gray-700 ">
          <Meme />
          <div className="flex flex-col justify-between pb-28 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-amber-700 ">Sortowanie memów</h5>
            <div className="mb-4">
              <form name="Form" action="" onSubmit={handleSubmit}>
                <select name="category" value={Form.values} className="flex bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full" defaultValue="Kategoria">
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
                <select name="type" value={Form.values} className="flex mt-3 mb-6 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full" defaultValue="Typ">
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
                <BooleanChooseField
                  fieldName="isNsfw"
                  idValueDictionary={[
                    { id: 'sfw', value: false, text: 'SFW' },
                    { id: 'nsfw', value: true, text: 'NSFW' }
                  ]}
                />
                <BooleanChooseField
                  fieldName="isUncropped"
                  idValueDictionary={[
                    { id: 'cropped', value: false, text: 'Cropped' },
                    { id: 'uncropped', value: true, text: 'Uncropped' }
                  ]}
                />
                <BooleanChooseField
                  fieldName="isMeme"
                  idValueDictionary={[
                    { id: 'meme', value: false, text: 'Meme' },
                    { id: 'notmeme', value: true, text: 'Not Meme' }
                  ]}
                />
                <button id="submit" type="submit" className="flex mt-3 mb-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full" onClick={Form.handleSubmit}>
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

function BooleanChooseField({ fieldName, idValueDictionary }) {
  return (
    <ul className="grid gap-6 w-full md:grid-cols-2">
      {idValueDictionary.map((option) => {
        return (
          <li>
            <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white"></h3>
            <input type="radio" className="hidden peer" name={fieldName} id={option.id} autoComplete="off" value={option.value} required="" />
            <label htmlFor={option.id} className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-900 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="block">
                <div className="w-full text-lg font-semibold">Kategoria</div>
                <div className="w-full">{option.text}</div>
              </div>
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default Sort;
