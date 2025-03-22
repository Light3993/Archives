import React from 'react';
import { motion } from 'framer-motion';
import { Book, Award, ExternalLink, Mail, Phone } from 'lucide-react';

// Interface pour les professeurs
interface Professor {
  id: number;
  name: string;
  title: string;
  image: string;
  specialization: string;
  expertise: string[];
  education: string[];
  contact: {
    email: string;
    phone: string;
  };
  publications: string[];
}

// Données des professeurs
const professors: Professor[] = [
  {
    id: 1,
    name: "Prof. Kondo Hloindo ADJALAH",
    title: "Directeur de l'EPL",
    image: "https://media.licdn.com/dms/image/v2/C5603AQFoQnyekBlwfQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516336082293?e=1747872000&v=beta&t=uz-XAQCquulRvrdHWuQZYO1YqF-N3yhMS3BSTxv3myw",
    specialization: "Génie Électrique",
    expertise: [
      "Intelligence Artificielle",
      "Machine Learning",
      "Big Data Analytics"
    ],
    education: [
      " Université de Technologie de Compiègne, France: Directeur de recherche Habilitation, Ingénierie des Systèmes, Sûreté de Fonctionnement et Sécurité · (2000 - 2003)",
      " Institut National Polytechnique de Lorraine, Nancy, France: Docteur en Philosophie (Ph.D.), Génie Electrique et Génie du Contrôle · (1989 - 1993)",
      " Université de Nancy 1, France: Master of Science (MSc), Génie électrique et automatique · (1988 - 1989)",
      " Université de Nancy 1, France: Licence en sciences (BSc), Automatique, Electronique & Génie Electrique · (1987 - 1988)"
    ],
    contact: {
      email: "k.sanda@epl.tg",
      phone: "+228 90 XX XX XX"
    },
    publications: [
      "Intelligence Artificielle en Afrique : Perspectives et Défis",
      "Machine Learning pour le Développement Durable"
    ]
  },
  {
    id: 2,
    name: "Dr. Ayité SENAH",
    title: "Directeur des Études",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop",
    specialization: "Génie Civil",
    expertise: [
      "Structures Avancées",
      "Matériaux Innovants",
      "Construction Durable"
    ],
    education: [
      "Doctorat en Génie Civil - École des Ponts ParisTech",
      "Master en Structures - EPL"
    ],
    contact: {
      email: "a.senah@epl.tg",
      phone: "+228 91 XX XX XX"
    },
    publications: [
      "Innovation dans la Construction en Afrique",
      "Matériaux Durables pour le Bâtiment"
    ]
  }
];

export const Professors = () => {
  const [selectedProfessor, setSelectedProfessor] = React.useState<Professor | null>(null);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Nos Professeurs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professors.map((professor) => (
            <motion.div
              key={professor.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedProfessor(professor)}
            >
              <div className="relative">
                <img
                  src={professor.image}
                  alt={professor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{professor.name}</h3>
                  <p className="text-gray-200">{professor.title}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Spécialisation</h4>
                  <p className="text-gray-600">{professor.specialization}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Domaines d'expertise</h4>
                  <ul className="space-y-1">
                    {professor.expertise.slice(0, 2).map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Book size={16} className="mr-2 text-blue-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedProfessor(professor)}
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Voir le profil complet
                  <ExternalLink size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de détail professeur */}
        {selectedProfessor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProfessor(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-lg max-w-3xl w-full overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProfessor.image}
                  alt={selectedProfessor.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProfessor(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedProfessor.name}</h3>
                  <p className="text-gray-600">{selectedProfessor.title}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Formation</h4>
                    <ul className="space-y-2">
                      {selectedProfessor.education.map((edu, index) => (
                        <li key={index} className="flex items-start">
                          <Award size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Domaines d'expertise</h4>
                    <ul className="space-y-2">
                      {selectedProfessor.expertise.map((exp, index) => (
                        <li key={index} className="flex items-start">
                          <Book size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Publications récentes</h4>
                  <ul className="space-y-2">
                    {selectedProfessor.publications.map((pub, index) => (
                      <li key={index} className="text-gray-600">
                        • {pub}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={`mailto:${selectedProfessor.contact.email}`}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <Mail size={16} className="mr-2" />
                    Contacter par email
                  </a>
                  <a
                    href={`tel:${selectedProfessor.contact.phone}`}
                    className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                  >
                    <Phone size={16} className="mr-2" />
                    Appeler
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};