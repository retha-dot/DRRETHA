import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-5 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-primary-sage text-white hover:bg-opacity-90 shadow-lg shadow-gray-200",
    outline: "bg-transparent border-2 border-primary-sage text-primary-sage hover:bg-primary-sage hover:text-white",
    white: "bg-white text-primary-sage hover:bg-gray-100 shadow-md"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;