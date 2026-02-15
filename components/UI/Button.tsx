
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.97] whitespace-nowrap';
  
  const variants = {
    primary: 'bg-[#0056D2] text-white hover:bg-[#0041A3] shadow-[0_4px_14px_0_rgba(0,86,210,0.39)] hover:shadow-[0_6px_20px_rgba(0,86,210,0.23)] border border-transparent',
    secondary: 'bg-blue-50 text-[#0056D2] hover:bg-blue-100 border border-blue-100',
    outline: 'border-2 border-[#0056D2] text-[#0056D2] hover:bg-blue-50 bg-white'
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-xs tracking-wide',
    md: 'px-7 py-3.5 text-sm tracking-wide',
    lg: 'px-9 py-4.5 text-base tracking-wide'
  };

  const width = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
