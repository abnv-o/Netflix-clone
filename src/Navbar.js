import React from "react";

function Navbar () {
    return(
        <div className="flex flex-col justify-between mx-8 py-4  item-center md:flex-row justify-center items-center gap-6" >
            <div className="bg-blue-900 bg-opacity-30 rounded-sm h-10 w-[150px] flex justify-center ">
                <h1 className="text-3xl text-red-500 tracking-widest md:text-4xl">NETFLIX</h1>
            </div>

            <div className="flex flex-col gap-6 md:flex-row">
                <button className="border-2 border-black px-3 text-white bg-red-500 rounded-lg">Language</button>
                <button className="border-2 border-red-500 px-5 text-white rounded-lg">Sign in</button>
            </div>
        </div>
    )

}

export default Navbar;