
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-dark mb-4">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Have questions about a trip or need a custom itinerary? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-serif font-bold text-dark mb-6">Contact Information</h3>
              <div className="space-y-6">
                <ContactItem 
                  icon={<HiMail className="w-6 h-6 text-secondary" />}
                  title="Email Us"
                  content="hello@wanderlust.com"
                />
                <ContactItem 
                  icon={<HiPhone className="w-6 h-6 text-secondary" />}
                  title="Call Us"
                  content="+1 (555) 123-4567"
                />
                <ContactItem 
                  icon={<HiLocationMarker className="w-6 h-6 text-secondary" />}
                  title="Visit Us"
                  content="123 Adventure Lane, Explore City, EC 90210"
                />
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-64 w-full flex items-center justify-center text-gray-500 overflow-hidden shadow-inner">
               <img src="/images/map_placeholder.png" className="w-full h-full object-cover opacity-50" alt="Map of Bhutan" />
               <span className="absolute text-dark bg-white/80 px-4 py-2 rounded-lg font-bold">Map Placeholder</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-serif font-bold text-dark mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Booking Request</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-teal-700 transition-colors shadow-lg">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) => (
  <div className="flex items-start">
    <div className="bg-primary/10 p-3 rounded-full mr-4">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-dark">{title}</h4>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default Contact;
