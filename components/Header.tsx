
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TruckIcon, MenuIcon, XIcon } from './IconComponents';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive
        ? 'bg-primary text-white'
        : 'text-slate-100 hover:bg-secondary-light hover:text-white'
    }`;
    
  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
      isActive
        ? 'bg-primary text-white'
        : 'text-slate-700 hover:bg-slate-200'
    }`;

  return (
    <header className="bg-secondary shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-2 text-white hover:text-primary transition-colors">
              <TruckIcon className="h-8 w-8" />
              <span className="text-xl font-bold">Batu Pasir Jaya</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={navLinkClasses}>Home</NavLink>
              <NavLink to="/catalog" className={navLinkClasses}>Katalog</NavLink>
              <NavLink to="/about" className={navLinkClasses}>Tentang Kami</NavLink>
              <NavLink to="/contact" className={navLinkClasses}>Kontak</NavLink>
              <NavLink to="/estimator" className="bg-accent text-secondary-dark font-bold px-4 py-2 rounded-md text-sm hover:bg-yellow-500 transition-all transform hover:scale-105">
                AI Estimator
              </NavLink>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-100 hover:text-white hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/catalog" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Katalog</NavLink>
            <NavLink to="/about" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Tentang Kami</NavLink>
            <NavLink to="/contact" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Kontak</NavLink>
            <NavLink to="/estimator" className="block w-full text-left bg-accent text-secondary-dark font-bold px-3 py-2 rounded-md text-base hover:bg-yellow-500 transition-all" onClick={() => setIsMenuOpen(false)}>
              AI Estimator
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
