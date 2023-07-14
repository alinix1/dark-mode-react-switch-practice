import { useState, createContext } from 'react';
import Form from './components/Form';
import ReactSwitch from 'react-switch';
import './App.css';

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Form />
        <div className="switch">
          <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
