
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiStar } from 'react-icons/hi';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">Get in Touch</h1>
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
              <h3 className="text-xl font-bold text-dark mb-6">Contact Information</h3>
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

            {/* Map Integration */}
            <div className="relative bg-white p-2 rounded-[2rem] shadow-2xl border border-gray-100 h-[500px] w-full overflow-hidden group">
              {/* Floating Location Card (Airbnb Style) */}
              <div className="absolute top-8 left-8 z-10 max-w-[280px] bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white/20 transform group-hover:-translate-y-1 transition-transform duration-500">
                <div className="flex items-center gap-1 text-secondary mb-1">
                  <HiStar className="w-4 h-4" />
                  <HiStar className="w-4 h-4" />
                  <HiStar className="w-4 h-4" />
                  <HiStar className="w-4 h-4" />
                  <HiStar className="w-4 h-4" />
                  <span className="text-xs font-bold text-dark ml-1">5.0</span>
                </div>
                <h4 className="font-bold text-dark text-lg leading-tight mb-1">Rosemary Restaurant</h4>
                <p className="text-xs text-gray-600 mb-3">Nemjo, Paro, Bhutan (Spiritual Heart of the Valley)</p>
                <div className="flex gap-2">
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Top Rated</span>
                  <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Authentic</span>
                </div>
              </div>

              {/* Floating Action Button */}
              <a 
                href="https://maps.google.com/?q=Rosemary+Restaurant+Nemjo+paro+bhutan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 z-10 bg-dark text-white px-6 py-3 rounded-full font-bold text-sm shadow-2xl hover:bg-primary transition-all duration-300 flex items-center gap-2"
              >
                <HiLocationMarker className="w-4 h-4" />
                Get Directions
              </a>

              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.090433753048!2d89.40121661155375!3d27.435292237338444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e19d00421835a3%3A0x8dcc253d45179083!2sRosemary%20Restaurant%20Nemjo%20paro%20bhutan!5e0!3m2!1sen!2sbt!4v1771832644792!5m2!1sen!2sbt" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[1.8rem] grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-dark mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Sundra" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Bomjan" />
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
