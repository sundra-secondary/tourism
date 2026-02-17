
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiLocationMarker, HiStar, HiSearch } from 'react-icons/hi';
import { destinations } from '../data/destinations';

const Destinations = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDestinations = destinations.filter(dest => {
    const matchesFilter = filter === 'All' || dest.type === filter;
    const matchesSearch = dest.title.toLowerCase().includes(searchTerm.toLowerCase()) || dest.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['All', 'Beach', 'Mountain', 'City', 'Cultural'];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">Explore Destinations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Find your dream getaway from our carefully selected list of world-class destinations.</p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search destinations..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-sm">
                  <HiStar className="text-yellow-400 mr-1" />
                  <span className="text-sm font-bold text-dark">{dest.rating}</span>
                </div>
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {dest.type}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <HiLocationMarker className="mr-1 text-primary" />
                  {dest.location}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2 font-serif group-hover:text-primary transition-colors">{dest.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{dest.description}</p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-xs uppercase tracking-wider">Starts from</span>
                    <span className="text-lg font-bold text-secondary">{dest.price}</span>
                  </div>
                  <Link 
                    to={`/destinations/${dest.id}`} 
                    className="px-5 py-2 bg-gray-100 text-dark text-sm font-medium rounded-lg group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No destinations found matching your criteria.</p>
            <button 
              onClick={() => {setFilter('All'); setSearchTerm('');}} 
              className="mt-4 text-primary font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
