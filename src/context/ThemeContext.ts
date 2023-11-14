import { createContext } from 'react';

type ThemeContextType = {
  theme: 'light' | 'dark';
  toogleTheme: () => void;
};

const ThemeContext = createContext({} as ThemeContextType);

export default ThemeContext;