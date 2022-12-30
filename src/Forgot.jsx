import React from "react";
import { Link } from "react-router-dom";
function Forgot() {
  return (
    <div className="flex flex-col items-center justify-center  bg-red-100 h-screen  ">
      <div className="flex flex-col items-center justify-center bg-white p-5 gap-y-3 drop-shadow-md">
        <div className=" flex flex-col w-96 ">
          <h className="text-2xl">Lost your password?</h>
          <h>
            Please enter your username or email address. You will receive a link
            to create a new password via email.
          </h>
        </div>
        <label htmlFor="email">
          username or email address
          <span className="text-red-500">*</span>
        </label>
        <input type="email" id="email" className="border-2 border-stone-300" />
        <button className="bg-red-500 text-white px-3 py-1 rounded">
          RESET PASSWORD
        </button>
        <Link className="text-red-500" to={"/"}>
          LoginPage
        </Link>
      </div>
    </div>
  );
}

export default Forgot;
