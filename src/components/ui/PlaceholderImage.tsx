import React from 'react';

interface PlaceholderImageProps {
  text: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  className?: string;
}

export default function PlaceholderImage({ text, width, height, aspectRatio = '3/2', className = '' }: PlaceholderImageProps) {
  // If width and height are provided, use them, otherwise use relative sizing
  const style = width && height 
    ? { width: `${width}px`, height: `${height}px` }
    : { width: '100%', aspectRatio };
    
  return (
    <div 
      className={`bg-[#403CCF]/10 flex items-center justify-center text-[#403CCF] font-medium rounded-lg overflow-hidden ${className}`}
      style={style}
    >
      {text}
    </div>
  );
}
