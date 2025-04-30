import React from 'react';
import Link from 'next/link';

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  large?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export default function PrimaryButton({ 
  children, 
  href, 
  className = "", 
  large = false,
  size,
  onClick
}: PrimaryButtonProps) {
  
  // Determinar o tamanho baseado em 'large' ou 'size'
  let sizeClass = '';
  if (large) {
    sizeClass = 'px-6 py-3 text-lg';
  } else if (size) {
    switch(size) {
      case 'sm':
        sizeClass = 'text-sm px-3 py-1.5';
        break;
      case 'md':
        sizeClass = 'text-base px-4 py-2';
        break;
      case 'lg':
        sizeClass = 'text-lg px-6 py-3';
        break;
      default:
        sizeClass = 'text-base px-4 py-2';
    }
  } else {
    sizeClass = 'text-base px-4 py-2';
  }
  
  const baseStyles = `flex items-center justify-center gap-2 ${sizeClass} bg-[#403CCF] hover:bg-[#403CCF]/90 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#403CCF]/50 ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={baseStyles} onClick={onClick}>
      {children}
    </button>
  );
}
