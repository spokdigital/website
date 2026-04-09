import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className="group relative">
      <div
        className={`relative z-10 group-hover:scale-[1.04] inline-flex h-12 items-center justify-center overflow-hidden rounded-full
       border  text-black border-gray-500/30 group-hover:bg-primary group-hover:text-white
      px-6 font-medium transition-all duration-300 ${className}`}
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
