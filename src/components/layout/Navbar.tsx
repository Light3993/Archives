import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu } from 'lucide-react'; // Importer l'icône Menu
import { motion } from 'framer-motion';

interface NavbarProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-9xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4 md:space-x-8">
            {/* Bouton hamburger modernisé */}
            <button
              onClick={onToggleSidebar}
              className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none"
              aria-label={isSidebarOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <Menu size={24} className="text-gray-800" /> {/* Icône hamburger */}
            </button>

            {/* Logo et titre */}
            <Link to="/" className="flex items-center">
              <img
                src="https://th.bing.com/th?q=Logo+EPL+Lome&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=TG&setlang=fr&adlt=moderate&t=1&mw=247"
                alt="EPL Logo"
                className="h-10 w-10 md:h-12 md:w-12"
              />
              <span className="ml-2 text-lg md:text-xl font-bold text-gray-800">EPL Archives</span>
            </Link>
          </div>

          {/* Liens de navigation (version desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/licence" className="text-gray-600 hover:text-blue-600">Licence</Link>
            <Link to="/master" className="text-gray-600 hover:text-blue-600">Master</Link>
            <Link to="/concours" className="text-gray-600 hover:text-blue-600">Concours</Link>
            <Link to="/annonces" className="text-gray-600 hover:text-blue-600">Annonces</Link>
          </div>

          {/* Barre de recherche et bouton menu mobile */}
          <div className="flex items-center space-x-4">
            {/* Barre de recherche (masquée sur mobile) */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-48 md:w-64 px-4 py-1 rounded-full border focus:outline-none focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            {/* Bouton menu mobile */}
            <button
              className="md:hidden p-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <Menu size={24} className="text-gray-800" />
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile (version mobile) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/licence"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Licence
            </Link>
            <Link
              to="/master"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Master
            </Link>
            <Link
              to="/concours"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Concours
            </Link>
            <Link
              to="/annonces"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Annonces
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};