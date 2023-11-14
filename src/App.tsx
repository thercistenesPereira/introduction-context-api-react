import ThemeProvider from './context/ThemeProvider';
import ThemeContext from './context/ThemeContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Imagem from './components/Imagem';
import './App.css';
import { useContext } from 'react';

function App() {
  const { theme }= useContext(ThemeContext);
  return (
    <>
      <ThemeProvider>
          <div className={ `app ${theme}`}>
            <Header />
            <Imagem />
            <Footer />
          </div>
      </ThemeProvider>
    </>
  )
}

export default App
