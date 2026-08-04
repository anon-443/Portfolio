import React, { createContext, useContext, useState, useEffect } from 'react';
import { accentColors, type AccentColor } from '../data/portfolioData';

interface ThemeContextValue {
  accent: AccentColor;
  setAccent: (a: AccentColor) => void;
  accentColor: string;
  accentGlow: string;
}

const ThemeContext = createContext<ThemeContextValue>({
  accent: 'cyan',
  setAccent: () => {},
  accentColor: '#06b6d4',
  accentGlow: 'rgba(6,182,212,0.15)',
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accent, setAccentState] = useState<AccentColor>('cyan');

  const setAccent = (a: AccentColor) => {
    setAccentState(a);
    const { primary, glow } = accentColors[a];
    document.documentElement.style.setProperty('--accent', primary);
    document.documentElement.style.setProperty('--accent-glow', glow);
    document.documentElement.style.setProperty('--accent-dim', glow.replace('0.15', '0.08'));
    document.documentElement.style.setProperty('--border-accent', primary.replace(')', ', 0.2)').replace('rgb', 'rgba'));
  };

  useEffect(() => {
    setAccent('cyan');
  }, []);

  return (
    <ThemeContext.Provider value={{
      accent,
      setAccent,
      accentColor: accentColors[accent].primary,
      accentGlow: accentColors[accent].glow,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
