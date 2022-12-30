import React from "react";
import { MdOutlineBloodtype, MdBloodtype } from "react-icons/md";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between    px-8 bg-red-200">
      <MdBloodtype className="text-red-600 text-5xl" />

      <MdOutlineBloodtype className="text-red-600 text-5xl" />
    </div>
  );
}

export default Navbar;
