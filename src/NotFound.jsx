import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <div className="">
        <h className="flex justify-center mt-2 text-4xl text-yellow-500 sm:text-5xl">
          Oops !
        </h>
        <h className="flex justify-center mt-3 font-mono text-2xl text-red-500 sm:text-3xl">
          404 PAGE NOT FOUND
        </h>
      </div>

      <div className="flex items-center justify-between">
        <h className="ml-3 text-gray-700 sm:text-3xl">
          The page you are looking for might have<br></br> been removed had its
          name changed or is temporarily unavailable.
        </h>
        <img
          className="w-44 h-44 sm:w-96 sm:h-64"
          src="https://media.discordapp.net/attachments/1005498488517312653/1017788499442798602/123IMG_20220909_183059-removebg-preview.png"
        ></img>
      </div>
      <div className="flex flex-row items-center justify-center mt-5 sm:mt-0">
        <Link
          className="p-1 m-2 text-white rounded bg-red-400 hover:bg-red-600"
          to="/"
        >
          BACK TO HOME PAGE
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
