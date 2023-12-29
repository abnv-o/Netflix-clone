import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar() {
  function click() {
    console.log("clicked");
    document.getElementById("hambuttons").classList.toggle("hidden");
  }

  return (
    // parent
    <div className="flex flex-col gap-4 justify-between  py-4  item-center md:flex-row mx-8">
      <div className="flex justify-between items-center w-full">
        {/* netflix text */}

        <div className=" flex justify-center ">
          <h1 className="text-3xl text-red-500 tracking-widest md:text-4xl">
            <Link to="/mainpage">NETFLIX</Link>
          </h1>
        </div>

        {/* Buttons */}
        <div className="hidden  md:flex gap-6 ">
          <Button title="SignUP" link="/signup" colour="border-red-500" />
          <Button title="Login" link="/login" colour="border-red-500"/>
        </div>

        {/* Hamburger */}
        <div onClick={() => click()} className="flex items-center md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </div>

      {/* Buttons in hamburger */}
      <div
        id="hambuttons"
        className=" hidden flex flex-col justify-center items-center gap-4  md:hidden "
      >
        <button className="border-2 border-black px-3 text-white bg-red-500 rounded-lg">
          Language
        </button>
        <button className="border-2 border-red-500 px-5 text-white rounded-lg">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
