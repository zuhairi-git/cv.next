import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import DynamicMetaTags from './DynamicMetaTags';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DynamicMetaTags />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
