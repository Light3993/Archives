import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Book, FileText, GraduationCap, Search } from 'lucide-react';
import DocViewer from 'react-doc-viewer';

interface Document {
  id: string;
  title: string;
  type: 'course' | 'exam' | 'assignment';
  url: string;
  date: string;
}

const documents: Document[] = [
  {
    id: '1',
    title: 'Analyse Mathématique - Cours',
    type: 'course',
    url: '/documents/analyse-math.pdf',
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'Mécanique des Fluides - Examen',
    type: 'exam',
    url: '/documents/mecanique-fluides-exam.pdf',
    date: '2024-02-20'
  },
  {
    id: '3',
    title: 'Programmation C - TP',
    type: 'assignment',
    url: '/documents/prog-c-tp.pdf',
    date: '2024-03-10'
  }
];

export const Licence = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { filiere, semestre } = useParams();
  const [selectedDoc, setSelectedDoc] = React.useState<Document | null>(null);

  // Filtrer les documents en fonction de la recherche
  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
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
            {filiere ? `Licence ${filiere.toUpperCase()}` : 'Licence'}
            {semestre && ` - ${semestre}`}
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
                <Book className="mr-2" size={20} />
                {filteredDocuments.filter(d => d.type === 'course').length} Cours
              </span>
              <span className="flex items-center text-gray-600">
                <FileText className="mr-2" size={20} />
                {filteredDocuments.filter(d => d.type === 'exam').length} Examens
              </span>
              <span className="flex items-center text-gray-600">
                <GraduationCap className="mr-2" size={20} />
                {filteredDocuments.filter(d => d.type === 'assignment').length} TPs
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredDocuments.map((doc) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedDoc(doc)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">{doc.title}</h3>
                  <p className="text-sm text-gray-600">
                    {new Date(doc.date).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                {doc.type === 'course' && <Book className="text-blue-600" size={20} />}
                {doc.type === 'exam' && <FileText className="text-red-600" size={20} />}
                {doc.type === 'assignment' && <GraduationCap className="text-green-600" size={20} />}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedDoc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDoc(null)}
        >
          <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold">{selectedDoc.title}</h3>
              <button
                onClick={() => setSelectedDoc(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="h-[calc(80vh-4rem)]">
              <DocViewer
                documents={[{ uri: selectedDoc.url }]}
                style={{ height: '100%' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};