import React from 'react';
import withLanguage from '../../HOC/withLanguage';

function PasswordResetForm(props) {
  return (
    <form className="bg-gray-700 p-8 flex flex-col justify-center items-center rounded-lg">
      <h2 className="text-lg text-white font-bold mb-4">{props.texts.remindPassword}</h2>
      <div className="relative z-0 w-full mb-6">
        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          {props.texts.email}
        </label>
      </div>
      <button type="submit" className="mt-2 bg-red-700 text-white rounded p-2 w-full">
        {props.texts.sendPassword}
      </button>
      <button type="button" className="text-white mt-2 cursor-pointer" onClick={() => props.setShowPasswordReset(false)}>
        {props.texts.back}
      </button>
    </form>
  );
}

export default withLanguage(PasswordResetForm);
