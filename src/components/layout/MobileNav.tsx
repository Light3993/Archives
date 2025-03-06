import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, GraduationCap, Book, FileText, Bell } from 'lucide-react';

export const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <div className="grid grid-cols-5 h-16">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center space-y-1 ${
              isActive ? 'text-primary-600' : 'text-gray-600'
            }`
          }
        >
          <Home size={20} />
          <span className="text-xs">Accueil</span>
        </NavLink>
        
        <NavLink
          to="/licence"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center space-y-1 ${
              isActive ? 'text-primary-600' : 'text-gray-600'
            }`
          }
        >
          <GraduationCap size={20} />
          <span className="text-xs">Licence</span>
        </NavLink>
        
        <NavLink
          to="/master"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center space-y-1 ${
              isActive ? 'text-primary-600' : 'text-gray-600'
            }`
          }
        >
          <Book size={20} />
          <span className="text-xs">Master</span>
        </NavLink>
        
        <NavLink
          to="/concours"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center space-y-1 ${
              isActive ? 'text-primary-600' : 'text-gray-600'
            }`
          }
        >
          <FileText size={20} />
          <span className="text-xs">Concours</span>
        </NavLink>
        
        <NavLink
          to="/annonces"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center space-y-1 ${
              isActive ? 'text-primary-600' : 'text-gray-600'
            }`
          }
        >
          <Bell size={20} />
          <span className="text-xs">Annonces</span>
        </NavLink>
      </div>
    </nav>
  );
}