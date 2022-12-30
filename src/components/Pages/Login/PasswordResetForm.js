import React from 'react';

function PasswordResetForm(props) {
  return (
    <form className="bg-gray-700 p-8 flex flex-col justify-center items-center  rounded-lg">
      <h2 className="text-lg text-white font-bold mb-4">Remind password</h2>
      <div className="mb-4">
        <input type="email" id="email" className=" w-full rounded" placeholder="Enter your email address" required />
      </div>
      <button type="submit" className="mt-2 bg-red-700 text-white rounded p-2 w-full">
        Send password reset link
      </button>
      <button type="button" className="text-white mt-2 cursor-pointer" onClick={() => props.setShowPasswordReset(false)}>
        Back to login form
      </button>
    </form>
  );
}

export default PasswordResetForm;
