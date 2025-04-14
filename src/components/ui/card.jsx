// src/components/ui/card.jsx
import * as React from "react";

export const Card = ({ children, className = "", style = {} }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-2xl p-4 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "", style = {} }) => {
  return (
    <div className={`mt-2 ${className}`} style={style}>
      {children}
    </div>
  );
};
