
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">Wanderlust<span className="text-secondary">.</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We create unforgettable journeys for the modern explorer. Discover the world's most breathtaking destinations with us.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialLink icon={<FaFacebookF />} />
              <SocialLink icon={<FaTwitter />} />
              <SocialLink icon={<FaInstagram />} />
              <SocialLink icon={<FaLinkedinIn />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/destinations" className="hover:text-secondary transition-colors">Destinations</Link></li>
              <li><Link to="/blog" className="hover:text-secondary transition-colors">Travel Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers and travel inspiration.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-secondary transition-colors"
              />
              <button className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Social Link Helper Component
const SocialLink = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
    {icon}
  </a>
);

export default Footer;
