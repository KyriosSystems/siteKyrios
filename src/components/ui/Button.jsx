import React from "react";
import "./Button.css"; // Estilos do botão

export const Button = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};
