import { useCurrency } from '../context/CurrencyContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const currencies = [
  { code: 'BTN', name: 'BTN (Nu)', flag: '🇧🇹' },
  { code: 'USD', name: 'USD ($)', flag: '🇺🇸' },
  { code: 'EUR', name: 'EUR (€)', flag: '🇪🇺' },
  { code: 'GBP', name: 'GBP (£)', flag: '🇬🇧' },
  { code: 'INR', name: 'INR (₹)', flag: '🇮🇳' },
];

const CurrencySelector = ({ light = false }) => {
  const { currency, setCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedCurrency = currencies.find(c => c.code === currency);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-all duration-300 ${
          light 
            ? 'text-white/90 hover:bg-white/10' 
            : 'text-dark/80 hover:bg-gray-100'
        }`}
      >
        <span className="text-sm font-semibold">{selectedCurrency?.flag}</span>
        <span className="text-sm font-medium">{selectedCurrency?.code}</span>
        <HiChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[150]"
          >
            <div className="py-1">
              {currencies.map((c) => (
                <button
                  key={c.code}
                  onClick={() => {
                    setCurrency(c.code as any);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                    currency === c.code ? 'text-primary font-bold bg-primary/5' : 'text-gray-700 font-medium'
                  }`}
                >
                  <span>{c.flag}</span>
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CurrencySelector;
