import React from 'react';

function BooleanChooseField({ fieldName, idValueDictionary, handleChange, form }) {
  return (
    <ul className="flex gap-8 w-full ">
      {idValueDictionary.map((option, i) => {
        return (
          <li key={i}>
            <p className="mb-5"></p>
            <input type="radio" className="hidden peer mb-5" name={fieldName} checked={form[fieldName] === option.value} value={option.value} id={option.id} onChange={handleChange} />
            <label htmlFor={option.id} className="inline-flex max-md:flex justify-between items-center border box-border h-16 w-32 p-4  text-gray-500 bg- rounded-lg cursor-pointer dark:hover:text-gray-300  dark:border-blue-900 checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-200 hover:bg-gray-900 dark:text-gray-400 dark:bg-gray-900   dark:hover:border-green-400 ">
              <div className="block">
                <div className="w-full text-lg font-semibold flex-nowrap">Category</div>
                <div className="w-full">{option.text}</div>
              </div>
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default BooleanChooseField;
