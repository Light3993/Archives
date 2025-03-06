import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar } from 'lucide-react';

const announcements = [
  {
    id: 1,
    title: "Inscription aux examens de rattrapage",
    content: "Les inscriptions aux examens de rattrapage sont ouvertes jusqu'au 15 avril 2024.",
    date: "2024-03-20",
    type: "general"
  },
  {
    id: 2,
    title: "Nouveaux cours en ligne - Licence Informatique",
    content: "Les nouveaux supports de cours pour le semestre 4 sont maintenant disponibles.",
    date: "2024-03-18",
    type: "licence"
  },
  {
    id: 3,
    title: "Soutenance de mémoire - Master IABD",
    content: "Planning des soutenances de mémoire pour la promotion 2024.",
    date: "2024-03-15",
    type: "master"
  }
];

export const Announcements = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Annonces et Communiqués
          </h2>
          <a
            href="/annonces"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Voir tout
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    announcement.type === 'general' ? 'bg-green-100 text-green-800' :
                    announcement.type === 'licence' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {new Date(announcement.date).toLocaleDateString('fr-FR')}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{announcement.title}</h3>
                <p className="text-gray-600">{announcement.content}</p>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t">
                <a
                  href={`/annonces/${announcement.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                >
                  <Bell size={16} className="mr-2" />
                  Lire plus
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};