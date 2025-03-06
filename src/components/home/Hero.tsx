import { motion } from 'framer-motion';
import { Search, ChevronDown, GraduationCap, Users, BookOpen } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Fond animé */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://gnatepe.com/wp-content/uploads/2023/08/Togo-Concours-dentree-a-lEcole-Polytechnique-de-Lome-EPL-2023-2024.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-900/80" />
      </div>

      {/* Contenu principal */}
      <div className="relative max-w-7xl mx-auto px-4 pt-20 md:pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo et titre */}
          <div className="flex items-center justify-center mb-6 md:mb-8">
            <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            École Polytechnique de Lomé
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto text-blue-100 px-4">
            Accédez à toutes les ressources pédagogiques et découvrez l'excellence académique
          </p>

          {/* Barre de recherche */}
          <div className="max-w-2xl mx-auto mb-12 md:mb-16 px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher des cours, examens, annonces..."
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-full text-gray-900 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg text-sm md:text-base"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 md:p-3 rounded-full hover:bg-blue-700 transition-colors">
                <Search size={20} className="md:w-6 md:h-6" />
              </button>
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6"
            >
              <Users className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-4 mx-auto text-blue-300" />
              <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">1200+</h3>
              <p className="text-sm md:text-base text-blue-200">Étudiants actifs</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6"
            >
              <BookOpen className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-4 mx-auto text-blue-300" />
              <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">50+</h3>
              <p className="text-sm md:text-base text-blue-200">Programmes d'études</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6"
            >
              <GraduationCap className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-4 mx-auto text-blue-300" />
              <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">95%</h3>
              <p className="text-sm md:text-base text-blue-200">Taux d'insertion</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="cursor-pointer"
          >
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-white/80" />
          </motion.div>
        </motion.div>
      </div>

      {/* Vagues décoratives */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 md:h-24 fill-current text-white/5"
          viewBox="0 0 1440 74"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,37 C240,37 480,0 720,0 C960,0 1200,37 1440,37 L1440,74 L0,74 Z" />
        </svg>
      </div>
    </div>
  );
};