
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiLocationMarker, HiStar } from 'react-icons/hi';
import { destinations } from '../../data/destinations';

const featuredDestinations = destinations.slice(0, 3);

const DestinationList = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-dark mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">From historical cities to tropical paradises, explore our most sought-after locations curated just for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <HiLocationMarker className="mr-1 text-primary" />
                  {dest.location}
                </div>
                
                <h3 className="text-xl font-bold text-dark mb-2 font-serif group-hover:text-primary transition-colors">{dest.title}</h3>
                
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
        
        <div className="mt-12 text-center">
          <Link 
            to="/destinations" 
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            View all destinations <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationList;
