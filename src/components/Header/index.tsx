import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

function Header() {
  const themeContext = useContext(ThemeContext);
  const { theme, toogleTheme } = themeContext;

  return (
    <header>
      <h1>Exercícios</h1>
      <button onClick={ toogleTheme}>{ theme === 'dark' ? '☀️' : '🌒' }</button>
    </header>
  );
}

export default Header;
