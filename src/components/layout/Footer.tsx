import React from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const staff = [
  {
    name: "Dr. Komla SANDA",
    role: "Directeur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    name: "Dr. Ayité SENAH",
    role: "Directeur des Études",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop"
  }
];

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Staff Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Responsables de l'EPL</h3>
            <div className="space-y-4">
              {staff.map((person) => (
                <div key={person.name} className="flex items-center space-x-3">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{person.name}</p>
                    <p className="text-gray-400 text-sm">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="/licence" className="hover:text-blue-400">Licence</a>
              </li>
              <li>
                <a href="/master" className="hover:text-blue-400">Master</a>
              </li>
              <li>
                <a href="/concours" className="hover:text-blue-400">Concours d'entrée</a>
              </li>
              <li>
                <a href="/annonces" className="hover:text-blue-400">Annonces</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-400">
                <Facebook size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-400">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} École Polytechnique de Lomé. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};