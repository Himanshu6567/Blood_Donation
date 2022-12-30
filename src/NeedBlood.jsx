import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { SiBookstack } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiHospitalFill } from "react-icons/ri";

function NeedBloodForm() {
  const [name, setname] = useState("");
  const [course, setcouse] = useState("");
  const [branch, setbranch] = useState("");
  const [number, setnumber] = useState("");
  const [mail, setmail] = useState("");
  const [blood, setblood] = useState("");

  const senddata = () => {
    if (
      name == "" ||
      course == "" ||
      branch == "" ||
      blood == "" ||
      number == "" ||
      mail == ""
    ) {
      alert("all feild are required");
    }

    console.log(
      name,
      "from ",
      course,
      "in",
      branch,
      "urgently need ",
      blood,
      " group blood",
      "her contect number is",
      number,
      " and email address is ",
      mail
    );
    alert("your request has been sent");
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-sky-300 ">
      <div className="flex flex-col items-center justify-center px-10 py-8 space-y-3 bg-indigo-400">
        <h className="text-2xl">Request for Blood</h>
        <h> fill your information here</h>

        {/* username */}

        <div className="flex items-center bg-gray-400">
          <div className="flex items-center justify-center w-10 bg-gray-400">
            <BsFillPersonFill className="text-2xl" />
          </div>
          <input
            onChange={(event) => {
              setname(event.target.value);
            }}
            type="text"
            className="h-10 w-80 px-7"
            placeholder="Enter your full name"
          ></input>
        </div>

        {/* course */}

        <div className="flex items-center bg-gray-400">
          <div className="flex items-center justify-center w-10 bg-gray-400">
            <SiBookstack className="text-2xl" />
          </div>
          <input
            onChange={(event) => {
              setcouse(event.target.value);
            }}
            type="text"
            className="h-10 w-80 px-7"
            placeholder="Enter your course"
          ></input>
        </div>

        {/* Branch */}

        <div className="flex items-center bg-gray-400">
          <div className="flex items-center justify-center w-10 bg-gray-400">
            <BsFillPersonFill className="text-2xl" />
          </div>
          <input
            onChange={(event) => {
              setbranch(event.target.value);
            }}
            type="text"
            className="h-10 w-80 px-7"
            placeholder="Enter your Branch"
          ></input>
        </div>

        {/* Mobile Number */}

        <div className="flex items-center bg-gray-400">
          <div className="flex items-center justify-center w-10 bg-gray-400">
            <IoIosCall className="text-2xl" />
          </div>
          <input
            onChange={(event) => {
              setnumber(event.target.value);
            }}
            type="number"
            className="h-10 w-80 px-7 "
            placeholder="Enter your Number"
          ></input>
        </div>

        {/* Emait */}

        <div className="flex items-center bg-gray-400">
          <div className="flex items-center justify-center w-10 bg-gray-400">
            <MdEmail className="text-2xl" />
          </div>
          <input
            onChange={(event) => {
              setmail(event.target.value);
            }}
            type="text"
            className="h-10 w-80 px-7"
            placeholder="Enter your email"
          ></input>
        </div>

        {/* Blood group */}

        <div className="flex items-center bg-gray-400">
          <div className="flex items-center justify-center w-10 bg-gray-400">
            <RiHospitalFill className="text-2xl" />
          </div>
          <input
            onChange={(event) => {
              setblood(event.target.value);
            }}
            type="text"
            className="h-10 w-80 px-7"
            placeholder="Required Blood groop"
          ></input>
        </div>

        <button
          onClick={senddata}
          className="h-8 bg-red-600 w-96 hover:bg-red-700 text-white"
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default NeedBloodForm;
