import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'light' | 'white' | 'primary' | 'dark';
  id?: string;
}

export default function Section({ 
  children, 
  className = '', 
  background = 'light',
  id
}: SectionProps) {
  const bgColors = {
    light: 'bg-[#FBFAFF]',
    white: 'bg-white',
    primary: 'bg-primary text-white',
    dark: 'bg-[#0a0a0a] text-white'
  };
  
  return (
    <section id={id} className={`py-16 ${bgColors[background]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
