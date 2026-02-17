
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pb-12 bg-white">
      {/* Hero */}
      <div className="relative h-[400px] w-full mb-12">
        <img 
          src="/images/dochula.jpg" 
          alt="About Bhutan" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Wanderlust</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">Passionate about curating unforgettable journeys.</p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-dark">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2020 by a group of avid local travelers, Wanderlust was born out of a simple desire: to share the magic of the Land of the Thunder Dragon. We believed that travel is not just about visiting new places, but about the spiritual connection, the Gross National Happiness, and the memories we create.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we have grown into a global community of explorers. We work tirelessly to uncover hidden gems and curate authentic experiences that go beyond the guidebooks.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <img src="/images/culture_2.jpg" alt="Bhutanese Monk" className="rounded-lg shadow-lg w-full h-48 object-cover mt-8" />
            <img src="/images/paro.jpg" alt="Bhutan Architecture" className="rounded-lg shadow-lg w-full h-48 object-cover" />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="bg-primary/5 rounded-2xl p-12 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem number="500+" label="Destinations" />
            <StatItem number="10k+" label="Happy Travelers" />
            <StatItem number="150+" label="Partners" />
            <StatItem number="4.9" label="Average Rating" />
          </div>
        </div>

        {/* Mission */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-serif font-bold text-dark mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            "To inspire and enable people to explore the world with curiosity, respect, and wonder. We strive to make travel accessible, sustainable, and transformative for everyone."
          </p>
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ number, label }: { number: string, label: string }) => (
  <div>
    <h3 className="text-4xl font-bold text-primary mb-2">{number}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

export default About;
