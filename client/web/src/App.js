import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import Routes from './routes';
import Header from './screens/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
