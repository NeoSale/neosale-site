import React from 'react';
import Link from 'next/link';

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  large?: boolean;
  onClick?: () => void;
}

export default function PrimaryButton({ 
  children, 
  href, 
  className = "", 
  large = false,
  onClick
}: PrimaryButtonProps) {
  
  const baseStyles = `flex items-center justify-center gap-2 ${large ? 'px-6 py-3 text-lg' : 'px-4 py-2'} bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 ${className}`;
  
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
