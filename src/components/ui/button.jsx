// src/components/ui/button.jsx
import * as React from "react";

export const Button = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`px-4 py-2 rounded-md bg-black text-white hover:bg-zinc-800 transition ${className}`}
      {...props}
    />
  );
});

Button.displayName = "Button";
