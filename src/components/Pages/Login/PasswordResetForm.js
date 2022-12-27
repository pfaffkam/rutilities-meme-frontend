import React from 'react';

function PasswordResetForm(setShowPasswordReset) {
  return (
    <form className="bg-gray-600 p-4  md:absolute top-16 right-5 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Remind password</h2>
      <div className="mb-4">
        <input type="email" id="email" className=" w-full rounded" placeholder="Enter your email address" />
      </div>
      <button type="submit" className="mt-2 bg-red-700 text-white rounded p-2 w-full">
        Send password reset link
      </button>
      <button className="text-white mt-2" onCancelClick={() => setShowPasswordReset(false)}>
        Back to login form
      </button>
    </form>
  );
}

export default PasswordResetForm;
