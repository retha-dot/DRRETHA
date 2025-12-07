import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [];

const LotusLogo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Central Bud */}
    <path d="M50 15 C38 35 35 55 50 78 C65 55 62 35 50 15 Z" opacity="0.9" />
    
    {/* Inner Petals */}
    <path d="M45 75 C35 62 28 45 35 30 C20 48 28 68 45 75 Z" opacity="0.8" />
    <path d="M55 75 C65 62 72 45 65 30 C80 48 72 68 55 75 Z" opacity="0.8" />
    
    {/* Outer Petals */}
    <path d="M40 78 C25 70 15 52 20 35 C8 55 18 72 40 78 Z" opacity="0.7" />
    <path d="M60 78 C75 70 85 52 80 35 C92 55 82 72 60 78 Z" opacity="0.7" />
    
    {/* Base Line */}
    <path d="M45 82 Q 50 88 55 82" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const appointmentUrl = "https://www.recomed.co.za/general-practitioner/centurion/retha-silvis/57561/69233/";
  const registerUrl = "https://forms.gle/s6rf8ifnAjGdYLbY7";
  const contactUrl = "https://wa.me/27615053025";

  const isExternal = (href: string) => href.startsWith('http');

  return (
    <header className="w-full relative z-50">
      {/* Notification Bar */}
      <div className="bg-primary-sage text-white text-xs sm:text-sm py-2 text-center px-4">
        <p className="font-medium">We are open throughout the festive season.</p>
      </div>

      {/* Navbar */}
      <nav className="bg-light-sage/90 backdrop-blur-sm sticky top-0 py-4 border-b border-primary-sage/10 relative">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Area */}
          <div className="flex items-center ml-0 md:ml-4 lg:ml-8">
            <LotusLogo className="w-12 h-12 md:w-16 md:h-16 text-primary-sage mr-3 md:mr-4 flex-shrink-0" />
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-sage leading-none">
                Dr. Retha Silvis
              </h1>
              <span className="text-xs tracking-wider text-body-grey uppercase mt-1">
                General Practitioner
              </span>
              <span className="text-xs tracking-wider text-body-grey uppercase">
                PR 0955795
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-8">
            <ul className="flex space-x-3 lg:space-x-6 text-heading-grey font-medium text-sm lg:text-base">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="hover:text-primary-sage transition-colors whitespace-nowrap"
                    {...(isExternal(item.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-2 lg:space-x-3">
              <a href={appointmentUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="hidden md:block whitespace-nowrap text-sm px-4 lg:text-base lg:px-6">Book Appointment</Button>
              </a>
              <a href={registerUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-4 lg:text-base lg:px-6">Register</Button>
              </a>
              <a href={contactUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-4 lg:text-base lg:px-6">Contact</Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${isMobileMenuOpen ? 'bg-primary-sage/10 text-primary-sage' : 'text-heading-grey hover:bg-gray-100'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen ? 'max-h-[600px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
          <div className="p-6 flex flex-col space-y-2">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="block text-lg font-medium text-heading-grey hover:text-primary-sage hover:bg-light-sage/50 px-4 py-3 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                {...(isExternal(item.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a href={appointmentUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button variant="outline" className="w-full justify-center">Book Appointment</Button>
              </a>
              <a href={registerUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button className="w-full justify-center">Register</Button>
              </a>
              <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button className="w-full justify-center">Contact</Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;