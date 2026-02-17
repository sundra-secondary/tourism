
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Destinations', path: '/destinations' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  const isLightPage = ['/destinations', '/contact'].includes(location.pathname);
  const showBackground = scrolled || isLightPage;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${showBackground ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className={`text-2xl font-bold font-serif z-50 relative transition-colors duration-300 ${
            isOpen ? 'text-dark' : (showBackground ? 'text-primary' : 'text-white')
          }`}
        >
          Wanderlust<span className="text-secondary">.</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.title} 
              to={link.path} 
              className={`text-sm font-medium hover:text-secondary transition-colors ${showBackground ? 'text-dark' : 'text-white/90 hover:text-white'}`}
            >
              {link.title}
            </Link>
          ))}
          <Link 
            to="/destinations" 
            className="px-5 py-2.5 bg-secondary text-white text-sm font-medium rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX className="text-dark" /> : <HiMenuAlt3 className={showBackground ? 'text-dark' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link 
                    to={link.path} 
                    className={`block text-3xl font-serif py-3 border-b border-gray-100 ${
                      location.pathname === link.path ? 'text-primary' : 'text-dark hover:text-secondary'
                    }`}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6"
              >
                <Link 
                  to="/destinations" 
                  className="block w-full text-center py-4 bg-secondary text-white text-xl font-bold rounded-xl shadow-lg shadow-orange-500/30"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Export Navbar component
export default Navbar;
