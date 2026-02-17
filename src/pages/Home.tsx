
import HeroSection from '../components/Features/HeroSection';
import DestinationList from '../components/Features/DestinationList';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <DestinationList />
      
      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <motion.img 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src="/images/culture_1.jpg" 
                alt="Bhutanese Culture" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-serif font-bold text-dark"
              >
                Why Choose <span className="text-secondary">Wanderlust?</span>
              </motion.h2>
              <div className="space-y-4">
                <FeatureItem 
                  title="Expertly Curated Trips" 
                  description="Our team of travel experts handpick every destination and activity to ensure quality experiences."
                />
                <FeatureItem 
                  title="24/7 Support" 
                  description="We are with you every step of the way, providing round-the-clock assistance for peace of mind."
                />
                <FeatureItem 
                  title="Sustainable Travel" 
                  description="We prioritize eco-friendly accommodations and activities to preserve the beauty of our planet."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureItem = ({ title, description }: { title: string, description: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="flex gap-4"
  >
    <div className="w-2 h-full min-h-[4rem] bg-secondary/20 rounded-full mt-1"></div>
    <div>
      <h3 className="text-xl font-bold text-dark mb-1">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default Home;
