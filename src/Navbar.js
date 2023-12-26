import React from "react";

function Navbar () {
    return(
        <div className="flex justify-between mx-8 mt-4" >
            <div>
                <h1>NETFLIX</h1>
            </div>

            <div className="flex gap-6">
                <p>Home</p>
                <p>About</p>
                <button>Login</button>
                <button>Signup</button>
            </div>
        </div>
    )

}

export default Navbar;