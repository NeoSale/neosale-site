"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Header() {
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
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
            <div className="relative">
              <button 
                className="text-gray-800 hover:text-primary font-medium flex items-center gap-1"
                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                onMouseEnter={() => setProductDropdownOpen(true)}
                onMouseLeave={() => setProductDropdownOpen(false)}
              >
                Produtos
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {productDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-md py-2 z-50"
                  onMouseEnter={() => setProductDropdownOpen(true)}
                  onMouseLeave={() => setProductDropdownOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-600">Agentes de IA por Nicho</h4>
                  </div>
                  <Link href="/produtos/juridico" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <span>Jurídico</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Disponível</span>
                  </Link>
                  <Link href="/produtos/imobiliaria" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <span>Imobiliária</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Disponível</span>
                  </Link>
                  <Link href="/produtos" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <span>Financeira</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">Em breve</span>
                  </Link>
                  <Link href="/produtos" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <span>Mais Nichos</span>
                  </Link>
                  
                  <div className="px-4 py-2 border-b border-t border-gray-100 mt-1">
                    <h4 className="text-sm font-semibold text-gray-600">Marketing Digital</h4>
                  </div>
                  <Link href="/produtos/trafego-pago" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <span>Tráfego Pago</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Disponível</span>
                  </Link>
                  <Link href="/produtos" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <span>Social Media</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">Em breve</span>
                  </Link>
                  
                  <div className="px-4 py-2 border-b border-t border-gray-100 mt-1">
                    <h4 className="text-sm font-semibold text-gray-600">Ferramentas Complementares</h4>
                  </div>
                  <Link href="/produtos" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <span>NeoFollow</span>
                  </Link>
                  <Link href="/produtos" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <span>NeoCalendar</span>
                  </Link>
                  <Link href="/produtos" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <span>NeoAI</span>
                  </Link>
                  
                  <div className="px-4 py-2 border-t border-gray-100 mt-1">
                    <Link href="/produtos" className="text-[#403CCF] text-sm font-medium flex items-center">
                      <span>Ver todos os produtos</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>
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
            <WhatsAppButton text="Fale conosco" phoneNumber="5511992761075"/>
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
