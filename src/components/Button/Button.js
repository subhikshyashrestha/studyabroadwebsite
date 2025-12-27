import React from "react";
import "./Button.css";

function Button({ children, type = "button", variant = "primary", size = "md", onClick }) {
  return (
    <button
      type={type}
      className={`btn ${variant} ${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
