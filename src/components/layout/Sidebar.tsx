import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Book,
  BookOpen,
  School,
  Users,
  Bell,
  FileText,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Interface pour la structure des programmes
interface Programs {
  licence: {
    fondamentale: {
      troncCommun: string[];
      filieres: string[];
    };
    professionnelle: {
      parcours: string[];
    };
  };
  master: {
    parcours: string[];
  };
}

// Données des programmes
const programs: Programs = {
  licence: {
    fondamentale: {
      troncCommun: ['Semestre 1', 'Semestre 2', 'Semestre 3', 'Semestre 4'],
      filieres: ['Génie-Mécanique', 'Génie-Civil', 'Génie-Électrique', 'IABD', 'Logistique-Transport', 'Informatique-Système'],
    },
    professionnelle: {
      parcours: ['Génie-Logiciel', 'Génie-Électrique', 'Génie-Civil', 'Génie-Mécanique', 'Systèmes-Réseaux-Informatique'],
    },
  },
  master: {
    parcours: ['Génie-Mécanique', 'Génie-Civil', 'Génie-Électrique', 'Intelligence-Artificielle & Big-Data', 'Logistique-Transport', 'Informatique-Système'],
  },
};

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const [openSections, setOpenSections] = React.useState<string[]>([]);

  // Fonction pour basculer l'état d'une section
  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  // Variants pour les animations
  const menuItemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: -280 }}
          animate={{ x: 0 }}
          exit={{ x: -280 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-lg overflow-y-auto z-40 w-[280px] md:w-[320px]"
          onMouseLeave={onToggle} // Fermer le Sidebar lorsque la souris quitte
        >
          <div className="relative p-4">
            <div className="space-y-6 mt-8">
              {/* Section Licence */}
              <div className="mb-6">
                <motion.button
                  variants={menuItemVariants}
                  onClick={() => toggleSection('licence')}
                  className="flex items-center justify-between w-full p-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <GraduationCap className="mr-2 text-blue-600" size={20} />
                    <span className="font-medium">Licence</span>
                  </div>
                  {openSections.includes('licence') ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </motion.button>

                <AnimatePresence>
                  {openSections.includes('licence') && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 mt-2 space-y-4"
                    >
                      {/* Licence Fondamentale */}
                      <div>
                        <h3 className="font-medium text-sm text-gray-600 mb-2">
                          Fondamentale ( Tronc Commun )
                        </h3>
                        <div className="space-y-1">
                          {programs.licence.fondamentale.troncCommun.map((semester) => (
                            <Link
                              key={semester}
                              to={`/licence/fondamentale/${semester.toLowerCase()}`}
                              className="flex items-center pl-4 py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              <BookOpen size={16} className="mr-2" />
                              {semester}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Filières */}
                      <div>
                        <h3 className="font-medium text-sm text-gray-600 mb-2">
                          Filières ( Spécialités )
                        </h3>
                        <div className="space-y-1">
                          {programs.licence.fondamentale.filieres.map((filiere) => (
                            <Link
                              key={filiere}
                              to={`/licence/fondamentale/${filiere.toLowerCase()}`}
                              className="flex items-center pl-4 py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              <School size={16} className="mr-2" />
                              {filiere}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Licence Professionnelle */}
                      <div>
                        <h3 className="font-medium text-sm text-gray-600 mb-2">
                          Professionnelle
                        </h3>
                        <div className="space-y-1">
                          {programs.licence.professionnelle.parcours.map((parcours) => (
                            <Link
                              key={parcours}
                              to={`/licence/professionnelle/${parcours.toLowerCase()}`}
                              className="flex items-center pl-4 py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              <Users size={16} className="mr-2" />
                              {parcours}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Section Master */}
              <div className="mb-6">
                <motion.button
                  variants={menuItemVariants}
                  onClick={() => toggleSection('master')}
                  className="flex items-center justify-between w-full p-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <Book className="mr-2 text-blue-600" size={20} />
                    <span className="font-medium">Master</span>
                  </div>
                  {openSections.includes('master') ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </motion.button>

                <AnimatePresence>
                  {openSections.includes('master') && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 mt-2 space-y-1"
                    >
                      {programs.master.parcours.map((parcours) => (
                        <Link
                          key={parcours}
                          to={`/master/${parcours.toLowerCase()}`}
                          className="flex items-center pl-4 py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <School size={16} className="mr-2" />
                          {parcours}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Liens rapides */}
              <div className="space-y-2">
                <Link
                  to="/concours"
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <FileText className="mr-2 text-blue-600" size={20} />
                  <span>Concours d'entrée</span>
                </Link>
                <Link
                  to="/annonces"
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Bell className="mr-2 text-blue-600" size={20} />
                  <span>Annonces</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};