import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ThemeContext from './components/Contexts/ThemeContext';
import FavContext from './components/Contexts/FavContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeContext>
      <FavContext>
      <App />
      </FavContext>
    </ThemeContext>
  </BrowserRouter>
);

