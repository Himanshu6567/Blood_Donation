import React, { useState } from "react";
import { Link } from "react-router-dom";

function Newuser() {
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [DOB, setDOB] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [CPass, setCPass] = useState("");

  const REGISTORNOW = () => {
    return console.log(FName, LName, DOB, number, email, pass, CPass);
  };

  return (
    <div className="flex items-center justify-center  h-screen w-full bg-red-300 ">
      <div className="flex flex-col p-5 bg-gray-400">
        <h1 className="text-2xl"> CREATE AN ACCOUNT..</h1>
        <div className="flex flex-col p-5 border-2 border-stone-300  bg-blue-400 gap-y-4">
          <div className="flex space-x-3">
            <div className="flex flex-col space-y-4">
              <label className="-mb-4 text-xl" htmlFor="FName">
                First Name
              </label>
              <input
                onChange={(event) => {
                  setFName(event.target.value);
                }}
                type="text"
                id="FName"
                className="border-2 border-stone-300 "
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="-mb-4 text-xl" htmlFor="LName">
                Last Name
              </label>
              <input
                onChange={(event) => {
                  setLName(event.target.value);
                }}
                type="text"
                id="LName"
                className="border-2 border-stone-300 "
              />
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="flex flex-col space-y-4">
              <label className="-mb-4 text-xl" htmlFor="DOB">
                Date-of-Birth
              </label>
              <input
                onChange={(event) => {
                  setDOB(event.target.value);
                }}
                id="DOB"
                type="date"
                className="border-2 border-stone-300  w-44"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="-mb-4 text-xl" htmlFor="MB">
                Mobile No.
              </label>
              <input
                onChange={(event) => {
                  setnumber(event.target.value);
                }}
                type="number"
                id="MB"
                className="border-2 border-stone-300 "
              />
            </div>
          </div>
          <label className="-mb-4 text-xl" htmlFor="email">
            Email
          </label>
          <input
            onChange={(event) => {
              setemail(event.target.value);
            }}
            className="h-8"
            id="email"
            type="email"
          />
          <div className="flex space-x-3">
            <div className="flex flex-col space-y-4">
              <label className="-mb-4 text-xl" htmlFor="password">
                password
              </label>
              <input
                onChange={(event) => {
                  setpass(event.target.value);
                }}
                type="password"
                id="password"
                className="border-2 border-stone-300 "
              />
            </div>

            <div className="flex flex-col space-y-4">
              <label className="-mb-4 text-xl" htmlFor="CPassword">
                confirm password
              </label>
              <input
                onChange={(event) => {
                  setCPass(event.target.value);
                }}
                type="password"
                id="CPassword"
                className="border-2 border-stone-300 "
              />
            </div>
          </div>

          <h>
            All field are required
            <spam className="text-red-600 text-3xl">*</spam>
          </h>
          <button
            onClick={REGISTORNOW}
            type="submit"
            className="px-2 py-1 text-white rounded bg-red-500 disabled:bg-primary-light"
          >
            REGISTOR
          </button>

          <div className="flex gap-x-1">
            <h>Already have an account?</h>

            <Link className="text-red-500" to={"/"}>
              LoginPage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newuser;
