"use client";
import React, { useEffect } from "react";

// Define the props type for the Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  loading,
  loadingText,
  ...props
}) => {
  return (
    <button
      disabled={loading}
      {...props}
      className={`bg-foreground text-textPrimary px-6 py-2 font-semibold border border-gray-200 shadow-[0_2px_2px_rgb(0,0,0,0.2)] disabled:bg-slate-200 flex items-center justify-center gap-2  hover:bg-foreground transition-all duration-300 rounded-lg relative overflow-hidden ${className}`}
    >
      {loading ? (
        <div className="flex items-center gap-1">
          <Loading /> {loadingText}
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;

const Loading: React.FC = () => {
  useEffect(() => {
    // Dynamically load the external script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js"; // The external JS URL
    script.type = "module"; // Specify the module type for the script
    script.async = true; // Make the script load asynchronously
    document.body.appendChild(script);

    // Cleanup by removing the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      {React.createElement("l-mirage", {
        size: "47",
        speed: "2.3",
        color: "black",
      })}
    </div>
  );
};
