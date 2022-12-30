import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function LoginPage() {
  const myemail = "helloSakshi@gmail.com";
  const mypassword = 987654321;
  const [email, setemail] = useState("");
  const [pass, setPass] = useState("");
  const [log, setlog] = useState(false);

  if (myemail == email && mypassword == pass && log == true) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen  bg-blue-200">
        <form className="flex flex-col p-5 bg-indigo-400 ">
          <h1 className="text-3xl"> Login</h1>
          <div className="flex flex-col p-5 border-2 border-stone-300 gap-y-4">
            <label className="-mb-4 text-xl" htmlFor="email">
              Email
            </label>

            <input
              onChange={(event) => {
                setemail(event.target.value);
              }}
              type="email"
              id="email"
              className="border-2 border-stone-400 "
            />
            <label className="-mb-4 text-xl" htmlFor="password">
              password
            </label>
            <input
              onChange={(event) => {
                setPass(event.target.value);
              }}
              id="password"
              type="password"
              className="border-2 border-stone-400 "
            />

            <div className="flex items-center">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remeber me</label>
            </div>

            <button
              onClick={() => setlog(true)}
              type="submit"
              className="px-2 py-1 text-white rounded bg-red-600"
            >
              LOG IN
            </button>

            <div className="flex gap-5 ">
              <Link className="text-red-500" to={"/forgot/"}>
                forgot password?
              </Link>

              <Link className="text-red-500" to={"/Newuser/"}>
                newuser?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

//ghosgali//
