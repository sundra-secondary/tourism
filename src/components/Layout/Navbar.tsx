
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import CurrencySelector from '../CurrencySelector';

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
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
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
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${showBackground ? 'py-4' : 'py-6'}`}>
        {/* Separated background to avoid backdrop-filter containing block issues for children */}
        <div className={`absolute inset-0 transition-all duration-300 ${showBackground ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`} />
        
        <div className="flex w-full px-4 md:px-8 justify-between items-center relative z-10">
          {/* Logo */}
          <Link 
            to="/" 
            className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              isOpen ? 'text-dark' : (showBackground ? 'text-primary' : 'text-white')
            }`}
          >
            Wanderlust<span className="text-secondary">.</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-8 mr-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.title} 
                  to={link.path} 
                  className={`text-sm font-medium hover:text-secondary transition-colors ${showBackground ? 'text-dark' : 'text-white/90 hover:text-white'}`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 border-l border-gray-200/20 pl-6">
              <CurrencySelector light={!showBackground} />
              <Link 
                to="/destinations" 
                className="px-5 py-2.5 bg-secondary text-white text-sm font-medium rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-secondary/30"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-2xl focus:outline-none transition-transform active:scale-95 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div className="relative w-7 h-7 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <HiX className="text-dark text-3xl" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                  >
                    <HiMenuAlt3 className={showBackground ? 'text-dark text-3xl' : 'text-white text-3xl'} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Moved OUTSIDE the transformed nav for absolute positioning freedom */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark/60 backdrop-blur-md z-[110] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 h-screen w-[85%] max-w-sm bg-white z-[120] flex flex-col pt-24 px-8 md:hidden shadow-[-20px_0_50px_rgba(0,0,0,0.2)]"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.08 }}
                  >
                    <Link 
                      to={link.path} 
                      className={`block text-2xl font-bold py-4 transition-colors ${
                        location.pathname === link.path ? 'text-primary' : 'text-dark hover:text-secondary'
                      }`}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-8 border-t border-gray-100 mt-6"
                >
                  <div className="mb-6 flex items-center justify-between px-2">
                    <span className="text-gray-500 font-medium">Currency</span>
                    <CurrencySelector />
                  </div>
                  <Link 
                    to="/destinations" 
                    className="block w-full text-center py-4 bg-secondary text-white text-lg font-bold rounded-2xl shadow-xl shadow-secondary/30 hover:shadow-secondary/40 active:scale-[0.98] transition-all"
                  >
                    Book Your Trip
                  </Link>
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Contact Gateway</p>
                    <p className="text-dark font-semibold text-sm mb-1">Thimphu, Bhutan</p>
                    <p className="text-gray-500 text-sm">info@wanderlust.com</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Export Navbar component
export default Navbar;
