import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import ReactPlayer from 'react-player';

interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  duration: string;
  category: 'testimonial' | 'course' | 'event';
}

const videos: Video[] = [
  {
    id: 1,
    title: "Crunch Time 2025",
    description: "Une journée marquée non seulement par l'innovation, l’esprit de collaboration et la passion des participants, mais aussi par un mariage entre L’Université de Lomé à travers l’Ecole Polytechnique de Lomé et trois institutions à savoir LNBTP, SMART2D, et WEST LAB.💡",
    url: "https://youtu.be/oCeVcRM1u-k",
    thumbnail: "https://media.licdn.com/dms/image/v2/D4E22AQFsnJ6Af-no-A/feedshare-shrink_2048_1536/B4EZVdX8KfGYAo-/0/1741028315649?e=1745452800&v=beta&t=8djLwK4zFVWx7ggXC0bNsG9GEVmxvMLRcgKw0pHeZoc",
    duration: "5:30",
    category: 'event'
  },
  {
    id: 2,
    title: "Partenariat Yas TOGO & Université de Lomé",
    description: " Yas Togo renforce l'employabilité des jeunes et leur permet de mieux se préparer aux défis du monde professionnel.",
    url: "https://youtu.be/REJrxw5aAD4",
    thumbnail: "https://media.licdn.com/dms/image/v2/D4E22AQGw1AoWujvmTw/feedshare-shrink_2048_1536/B4EZVsqrmNH0Ao-/0/1741284945303?e=1745452800&v=beta&t=QrvzcyLZWScFPMOXLkIhniZm2JQj3jel3x_93aC69co",
    duration: "2:13",
    category: 'event'
  },
 { id: 1,
  title: "Yas Togo à la 3e édition de « Innovation Crunch Time » à l’Université de Lomé !",
  description: "Yas Togo, engagé pour l’employabilité des jeunes, a animé une conférence inspirante le 3 mars dernier à l’Auditorium de l’Institut Confucius au profit des étudiants de l’E.P.L.",
  url: "https://youtu.be/oCeVcRM1u-k",
  thumbnail: "https://media.licdn.com/dms/image/v2/D4E22AQGF9ohVovyhjw/feedshare-shrink_2048_1536/B4EZWOvFYVGgAo-/0/1741856465177?e=1745452800&v=beta&t=UES9mH7pGNEqd_GrJPQUu6kDqd3mmkpk9JEZ13wAX80",
  duration: "5:30",
  category: 'event'
 }
];

export const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = React.useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [filter, setFilter] = React.useState<Video['category'] | 'all'>('all');

  const filteredVideos = filter === 'all' 
    ? videos 
    : videos.filter(video => video.category === filter);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Vidéos EPL
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tout
            </button>
            <button
              onClick={() => setFilter('testimonial')}
              className={`px-4 py-2 rounded-lg ${
                filter === 'testimonial'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Témoignages
            </button>
            <button
              onClick={() => setFilter('course')}
              className={`px-4 py-2 rounded-lg ${
                filter === 'course'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Cours
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVideos.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Play size={48} className="text-white opacity-80" />
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 px-2 py-1 rounded text-white text-sm">
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
                <span className={`mt-4 inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  video.category === 'testimonial' ? 'bg-green-100 text-green-800' :
                  video.category === 'course' ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {video.category === 'testimonial' ? 'Témoignage' :
                   video.category === 'course' ? 'Cours' : 'Événement'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de lecture vidéo */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={() => {
              setSelectedVideo(null);
              setIsPlaying(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-black rounded-lg overflow-hidden max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <ReactPlayer
                  url={selectedVideo.url}
                  width="100%"
                  height="calc(100vh - 200px)"
                  playing={isPlaying}
                  muted={isMuted}
                  controls={true}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-gray-200"
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-white hover:text-gray-200"
                    >
                      {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};