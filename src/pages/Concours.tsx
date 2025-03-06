import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, Users, Award } from 'lucide-react';

interface Exam {
  id: string;
  year: number;
  subject: string;
  type: 'maths' | 'physique';
  url: string;
  duration: string;
  candidates: number;
  places: number;
}

const exams: Exam[] = [
  {
    id: '1',
    year: 2024,
    subject: 'Mathématiques',
    type: 'maths',
    url: '/examens/maths-2024.pdf',
    duration: '2h',
    candidates: 1200,
    places: 120
  },
  {
    id: '2',
    year: 2024,
    subject: 'Physique',
    type: 'physique',
    url: '/examens/physique-2024.pdf',
    duration: '2h',
    candidates: 1200,
    places: 120
  },
  {
    id: '3',
    year: 2023,
    subject: 'Mathématiques',
    type: 'maths',
    url: '/examens/maths-2023.pdf',
    duration: '2h',
    candidates: 1000,
    places: 100
  },
  {
    id: '4',
    year: 2023,
    subject: 'Physique',
    type: 'physique',
    url: '/examens/physique-2023.pdf',
    duration: '2h',
    candidates: 1000,
    places: 100
  },
  {
    id: '5',
    year: 2022,
    subject: 'Mathématiques',
    type: 'maths',
    url: '/examens/maths-2022.pdf',
    duration: '2h',
    candidates: 1100,
    places: 100
  },
];

export const Concours = () => {
  const [selectedYear, setSelectedYear] = React.useState<number | null>(null);
  const years = Array.from(new Set(exams.map(exam => exam.year))).sort((a, b) => b - a);

  const filteredExams = selectedYear
    ? exams.filter(exam => exam.year === selectedYear)
    : exams;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            Concours d'Entrée
          </h1>
          <div className="flex flex-wrap gap-2">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year === selectedYear ? null : year)}
                className={`px-3 py-1 md:px-4 md:py-2 rounded-lg transition-colors text-sm md:text-base ${
                  year === selectedYear
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {filteredExams.map((exam) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-50 rounded-lg p-4 md:p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {exam.subject}
                  </h3>
                  <p className="text-gray-600">Session {exam.year}</p>
                </div>
                <span className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium ${
                  exam.type === 'maths'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {exam.type.charAt(0).toUpperCase() + exam.type.slice(1)}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="mr-2" size={16} />
                  Durée: {exam.duration}
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="mr-2" size={16} />
                  {exam.candidates} candidats
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="mr-2" size={16} />
                  {exam.places} places
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t space-y-2 md:space-y-0">
                <a
                  href={exam.url}
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <FileText className="mr-2" size={16} />
                  Voir l'épreuve
                </a>
                <a
                  href={`${exam.url}?download=true`}
                  className="flex items-center text-gray-600 hover:text-gray-700"
                >
                  <Download className="mr-2" size={16} />
                  Télécharger
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Section Résultats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Résultats du Concours
        </h2>

        <div className="space-y-4">
          {years.map(year => (
            <div
              key={year}
              className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                <div>
                  <h3 className="text-lg font-semibold">Session {year}</h3>
                  <p className="text-gray-600">
                    Résultats publiés le {new Date(year, 5, 15).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={`/resultats/preselection-${year}.pdf`}
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <FileText className="mr-2" size={16} />
                    Présélection
                  </a>
                  <a
                    href={`/resultats/definitif-${year}.pdf`}
                    className="flex items-center text-green-600 hover:text-green-700"
                  >
                    <FileText className="mr-2" size={16} />
                    Définitif
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};