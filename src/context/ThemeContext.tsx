import React, { createContext, useContext, useState, useEffect } from 'react';
import { accentColors, type AccentColor } from '../data/portfolioData';

type ThemeMode = 'dark' | 'light';
interface ThemeContextValue {
  accent: AccentColor;
  setAccent: (a: AccentColor) => void;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  accentColor: string;
  accentGlow: string;
}

const ThemeContext = createContext<ThemeContextValue>({
  accent: 'red',
  setAccent: () => {},
  mode: 'dark',
  setMode: () => {},
  accentColor: '#dc2626',
  accentGlow: 'rgba(220,38,38,0.18)',
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accent, setAccentState] = useState<AccentColor>('red');
  const [mode, setModeState] = useState<ThemeMode>('dark');

  const applyTheme = (nextAccent: AccentColor, nextMode: ThemeMode) => {
    const { primary, glow, border } = accentColors[nextAccent];
    document.documentElement.dataset.theme = nextMode;
    document.documentElement.style.setProperty('--accent', primary);
    document.documentElement.style.setProperty('--accent-glow', glow);
    document.documentElement.style.setProperty('--accent-dim', glow.replace('0.18', '0.1'));
    document.documentElement.style.setProperty('--border-accent', border);
  };

  const setAccent = (next: AccentColor) => {
    setAccentState(next);
    localStorage.setItem('portfolio-accent-v2', next);
    applyTheme(next, mode);
  };

  const setMode = (next: ThemeMode) => {
    setModeState(next);
    localStorage.setItem('portfolio-mode', next);
    applyTheme(accent, next);
  };

  useEffect(() => {
    const savedAccent = (localStorage.getItem('portfolio-accent-v2') as AccentColor | null) || 'red';
    const savedMode = (localStorage.getItem('portfolio-mode') as ThemeMode | null) || 'dark';
    setAccentState(savedAccent in accentColors ? savedAccent : 'red');
    setModeState(savedMode === 'light' ? 'light' : 'dark');
    applyTheme(savedAccent in accentColors ? savedAccent : 'red', savedMode === 'light' ? 'light' : 'dark');
  }, []);

  return <ThemeContext.Provider value={{ accent, setAccent, mode, setMode, accentColor: accentColors[accent].primary, accentGlow: accentColors[accent].glow }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
