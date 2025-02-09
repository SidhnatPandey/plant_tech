import { motion } from 'framer-motion';
import { GamepadIcon, Star, Download, Users } from 'lucide-react';

const Games = () => {
  const games = [
    {
      title: 'Space Explorer',
      description: 'Embark on an epic journey through the cosmos',
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80',
      rating: 4.8,
      downloads: '1M+',
      players: '500K',
      category: 'Adventure',
    },
    {
      title: 'Cyber Quest',
      description: 'Navigate through a cyberpunk world full of challenges',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80',
      rating: 4.6,
      downloads: '2M+',
      players: '800K',
      category: 'Action',
    },
    {
      title: 'Fantasy Realm',
      description: 'Explore a magical world of myths and legends',
      image: 'https://images.unsplash.com/photo-1642532788882-10820e4e4db0?auto=format&fit=crop&q=80',
      rating: 4.9,
      downloads: '3M+',
      players: '1M',
      category: 'RPG',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <GamepadIcon className="w-16 h-16 mx-auto mb-6 text-indigo-400" />
            <h1 className="text-4xl font-bold mb-4">Our Games</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our collection of immersive gaming experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 rounded-full px-2 py-1 flex items-center">
                    <Star className="w-4 h-4 text-white mr-1" />
                    <span className="text-white font-bold">{game. rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                  <p className="text-gray-400 mb-4">{game.description}</p>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 text-indigo-400 mr-1" />
                      <span className="text-gray-300">{game.downloads}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-indigo-400 mr-1" />
                      <span className="text-gray-300">{game.players}</span>
                    </div>
                    <span className="bg-indigo-600 px-3 py-1 rounded-full text-sm">
                      {game.category}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Play Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Games;