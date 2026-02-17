
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiStar, HiClock, HiCheck } from 'react-icons/hi';
import { destinations } from '../data/destinations';
import { useState } from 'react';

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === Number(id));
  const [activeTab, setActiveTab] = useState('overview');

  if (!destination) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-dark mb-4">Destination not found</h2>
          <Link to="/destinations" className="text-primary hover:underline">Back to Destinations</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12 bg-white">
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={destination.image} 
          alt={destination.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-secondary px-3 py-1 rounded-full text-xs font-bold uppercase">{destination.type}</span>
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                  <HiStar className="text-yellow-400 mr-1" />
                  <span className="text-sm font-bold">{destination.rating}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-2">{destination.title}</h1>
              <div className="flex items-center text-lg text-gray-200">
                <HiLocationMarker className="mr-2" />
                {destination.location}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-8">
              {['overview', 'itinerary', 'gallery'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-medium text-sm focus:outline-none capitalize transition-colors border-b-2 ${
                    activeTab === tab 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-gray-500 hover:text-dark'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content Areas */}
            <div className="min-h-[300px]">
              {activeTab === 'overview' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="text-2xl font-serif font-bold text-dark mb-4">About the Trip</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">{destination.description}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  
                  <h4 className="text-xl font-bold text-dark mb-3">Highlights</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['Guided City Tour', 'Traditional Dinner', 'Sunset Cruise', 'Museum Visits', 'Hiking Adventure', 'Local Market Visit'].map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <HiCheck className="text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeTab === 'itinerary' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  {[1, 2, 3, 4, 5].map((day) => (
                    <div key={day} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                          {day}
                        </div>
                        {day !== 5 && <div className="w-0.5 h-full bg-gray-200 my-2"></div>}
                      </div>
                      <div className="pb-6">
                        <h4 className="text-lg font-bold text-dark mb-2">Day {day}: Exploration & Adventure</h4>
                        <p className="text-gray-600 text-sm flex items-center mb-2">
                          <HiClock className="mr-1" /> 09:00 AM - 05:00 PM
                        </p>
                        <p className="text-gray-600">
                          Detailed itinerary description for day {day}. Includes breakfast, morning activity, lunch break, and afternoon sightseeing.
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'gallery' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.images.map((img, i) => (
                      <img 
                        key={i} 
                        src={img} 
                        alt={`Gallery ${i}`} 
                        className="rounded-lg w-full h-64 object-cover shadow-md hover:shadow-xl transition-shadow"
                      />
                    ))}
                  </motion.div>
              )}
            </div>
          </div>

          {/* Booking Card - Sticky */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <span className="text-gray-500 text-sm">Price per person</span>
                  <div className="text-3xl font-bold text-dark">{destination.price}</div>
                </div>
                <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                   7 Days / 6 Nights
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Dates</label>
                  <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
              </div>

              <button className="w-full py-3 bg-secondary text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 mb-4">
                Book Now
              </button>
              
              <p className="text-center text-xs text-gray-500">
                Free cancellation up to 48 hours before the trip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
