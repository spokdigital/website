import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className="group relative">
      <div
        className={`relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-full
      bg-gradient-to-r from-[#f95656] to-[#ff7777] border-2 border-[#f86969]
      px-6 font-medium text-white transition-all duration-300
      group-hover:-translate-x-3 group-hover:-translate-y-3 ${className}`}
      >
        {children}
      </div>
      <div
        className="absolute inset-0 z-0 h-full w-full rounded-full transition-all duration-300
      group-hover:-translate-x-3 group-hover:-translate-y-3
      group-hover:[box-shadow:5px_5px_#FF3333,10px_10px_#FF6666,15px_15px_#FF9999]"
      ></div>
    </button>
  );
};

export default Button;
