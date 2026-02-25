import React, { createContext, useContext, useState, useEffect } from 'react';

type Currency = 'BTN' | 'USD' | 'EUR' | 'GBP' | 'INR';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  rates: Record<string, number>;
  convert: (amount: number) => string;
  isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const API_KEY = 'b8e97a5b209c2fb525ad442a';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/BTN`;

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    const saved = localStorage.getItem('user-currency');
    return (saved as Currency) || 'BTN';
  });
  const [rates, setRates] = useState<Record<string, number>>({ BTN: 1 });
  const [isLoading, setIsLoading] = useState(true);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem('user-currency', newCurrency);
  };

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(BASE_URL);
        const data = await response.json();
        if (data.result === 'success') {
          setRates(data.conversion_rates);
        }
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRates();
  }, []);

  const convert = (amount: number) => {
    const rate = rates[currency] || 1;
    const convertedAmount = amount * rate;

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(convertedAmount);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, rates, convert, isLoading }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
