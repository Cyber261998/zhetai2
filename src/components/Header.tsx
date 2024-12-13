import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './common/Logo';
import { Navigation } from './navigation/Navigation';
import { LanguageSelector } from './common/LanguageSelector';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="hidden md:flex items-center space-x-8">
            <Navigation />
            <LanguageSelector />
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <Navigation className="flex flex-col space-y-3" />
            <div className="pt-4">
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}