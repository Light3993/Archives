import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, Filter, Search } from 'lucide-react';

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'general' | 'licence' | 'master';
  important: boolean;
}

const announcements: Announcement[] = [
  {
    id: '1',
    title: "Inscription aux examens de rattrapage",
    content: "Les inscriptions aux examens de rattrapage sont ouvertes jusqu'au 15 avril 2024. Tous les étudiants concernés doivent impérativement s'inscrire avant cette date limite. Les modalités d'inscription sont disponibles au secrétariat.",
    date: "2024-03-20",
    type: "general",
    important: true
  },
  {
    id: '2',
    title: "Nouveaux cours en ligne - Licence Informatique",
    content: "Les nouveaux supports de cours pour le semestre 4 sont maintenant disponibles sur la plateforme. Ces ressources comprennent les slides, exercices et travaux pratiques.",
    date: "2024-03-18",
    type: "licence",
    important: false
  },
  {
    id: '3',
    title: "Soutenance de mémoire - Master IABD",
    content: "Le planning des soutenances de mémoire pour la promotion 2024 est désormais disponible. Les soutenances se dérouleront du 1er au 15 juin 2024.",
    date: "2024-03-15",
    type: "master",
    important: true
  }
];

export const Annonces = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedType, setSelectedType] = React.useState<string | null>(null);
  const [showImportantOnly, setShowImportantOnly] = React.useState(false);

  const filteredAnnouncements = announcements
    .filter(announcement => 
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(announcement => 
      !selectedType || announcement.type === selectedType
    )
    .filter(announcement => 
      !showImportantOnly || announcement.important
    );

  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            Annonces et Communiqués
          </h1>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full md:w-64 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <select
              className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedType || ''}
              onChange={(e) => setSelectedType(e.target.value || null)}
            >
              <option value="">Tous les types</option>
              <option value="general">Général</option>
              <option value="licence">Licence</option>
              <option value="master">Master</option>
            </select>
            <button
              onClick={() => setShowImportantOnly(!showImportantOnly)}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                showImportantOnly
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Filter className="mr-2" size={20} />
              Important
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {filteredAnnouncements.map((announcement) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-lg ${
                announcement.important
                  ? 'bg-blue-50 border border-blue-200'
                  : 'bg-gray-50'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-3">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {announcement.title}
                    </h2>
                    {announcement.important && (
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        Important
                      </span>
                    )}
                  </div>
                  <div className="flex items-center mt-2 text-sm text-gray-600">
                    <Calendar className="mr-2" size={16} />
                    {new Date(announcement.date).toLocaleDateString('fr-FR')}
                    <span className="mx-2">•</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      announcement.type === 'general' ? 'bg-green-100 text-green-800' :
                      announcement.type === 'licence' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
                    </span>
                  </div>
                </div>
                <Bell
                  size={20}
                  className={`flex-shrink-0 ${
                    announcement.important ? 'text-blue-600' : 'text-gray-400'
                  }`}
                />
              </div>
              <p className="text-gray-600 whitespace-pre-line">
                {announcement.content}
              </p>
              <div className="mt-4 flex justify-end">
                <a
                  href={`/annonces/${announcement.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Lire plus
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};