import { useState } from 'react';
import ThemeContext from './ThemeContext';

type ThemeContextType = {
  children: React.ReactNode;
};

function ThemeProvider({children}: ThemeContextType) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toogleTheme = () => { setTheme((prevState) =>
    prevState === 'light' ? 'dark' : 'light') };
  return (
    <ThemeContext.Provider value={ { theme: theme, toogleTheme } }>
      <div className={theme}>
        { children }
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
