import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Book, FileText, GraduationCap, Users, Calendar, Clock, Search } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  professor: string;
  credits: number;
  duration: string;
  students: number;
  description: string;
  documents: {
    courses: number;
    assignments: number;
    exams: number;
  };
}

const courses: Course[] = [
  {
    id: '1',
    title: 'Intelligence Artificielle Avancée',
    professor: 'Dr. Kodjo AGBOSSOU',
    credits: 6,
    duration: '60h',
    students: 25,
    description: 'Cours avancé sur les techniques modernes d\'IA, incluant le deep learning et le reinforcement learning.',
    documents: {
      courses: 12,
      assignments: 6,
      exams: 3
    }
  },
  {
    id: '2',
    title: 'Systèmes Distribués',
    professor: 'Dr. Ama KOFFI',
    credits: 4,
    duration: '45h',
    students: 30,
    description: 'Architecture et conception des systèmes distribués, cloud computing et microservices.',
    documents: {
      courses: 8,
      assignments: 4,
      exams: 2
    }
  }
];

export const Master = () => {
  const { parcours } = useParams();
  const [selectedCourse, setSelectedCourse] = React.useState<Course | null>(null);
  const [searchQuery, setSearchQuery] = React.useState('');

  // Filtrer les cours en fonction de la recherche
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.professor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            {parcours ? `Master ${parcours.toUpperCase()}` : 'Master'}
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
            <div className="flex space-x-4">
              <span className="flex items-center text-gray-600">
                <Users className="mr-2" size={20} />
                {filteredCourses.reduce((acc, course) => acc + course.students, 0)} Étudiants
              </span>
              <span className="flex items-center text-gray-600">
                <Clock className="mr-2" size={20} />
                {filteredCourses.reduce((acc, course) => acc + parseInt(course.duration), 0)}h Total
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-50 rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedCourse(course)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {course.credits} Credits
                </span>
              </div>

              <p className="text-gray-600 mb-4">{course.description}</p>

              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Users className="mr-2" size={16} />
                <span className="mr-4">{course.students} étudiants</span>
                <Clock className="mr-2" size={16} />
                <span>{course.duration}</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop"
                    alt={course.professor}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm text-gray-600">{course.professor}</span>
                </div>
                <div className="flex space-x-4">
                  <span className="flex items-center text-sm text-gray-500">
                    <Book className="mr-1" size={16} />
                    {course.documents.courses}
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <FileText className="mr-1" size={16} />
                    {course.documents.assignments}
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <GraduationCap className="mr-1" size={16} />
                    {course.documents.exams}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedCourse && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCourse(null)}
        >
          <div className="bg-white rounded-lg w-full max-w-4xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{selectedCourse.title}</h2>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-gray-600">{selectedCourse.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Informations</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Users className="mr-2" size={16} />
                      {selectedCourse.students} étudiants
                    </li>
                    <li className="flex items-center">
                      <Clock className="mr-2" size={16} />
                      {selectedCourse.duration}
                    </li>
                    <li className="flex items-center">
                      <Calendar className="mr-2" size={16} />
                      {selectedCourse.credits} crédits
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};