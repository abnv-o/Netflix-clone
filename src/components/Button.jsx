import React from "react";
import { Link } from "react-router-dom";

function Button({ title, link,colour }) {
  return (
    <div>
      <button className={`border-2 ${colour} px-5 text-white rounded-lg`}>
        <Link to={link}>{title}</Link>
      </button>
    </div>
  );
}

export default Button;
