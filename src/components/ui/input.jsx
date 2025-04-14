// src/components/ui/input.jsx
import * as React from "react";

export const Input = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${className}`}
      {...props}
    />
  );
});

Input.displayName = "Input";
