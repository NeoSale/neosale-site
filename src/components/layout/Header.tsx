import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FBFAFF] shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="NeoSale Logo" 
              width={200} 
              height={50} 
              className="h-14 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-primary font-medium">
              Home
            </Link>
            <Link href="/produtos" className="text-gray-800 hover:text-primary font-medium">
              Produtos
            </Link>
            <Link href="/sobre" className="text-gray-800 hover:text-primary font-medium">
              Sobre
            </Link>
            <Link href="/planos" className="text-gray-800 hover:text-primary font-medium">
              Planos
            </Link>
            <Link href="/contato" className="text-gray-800 hover:text-primary font-medium">
              Contato
            </Link>
          </nav>
          
          <div className="hidden md:block">
            <WhatsAppButton text="Fale conosco" />
          </div>
          
          <button className="md:hidden text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
