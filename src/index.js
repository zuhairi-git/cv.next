import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import DynamicMetaTags from './DynamicMetaTags';
import { createRoot } from 'react-dom';
import { Helmet as ReactHelmetAsync } from 'react-helmet-async';

const metaTags = {
  title: 'CV Lanes | Landing Page',
  description: 'Professional Product Designer',
  ogImage: 'https://centerux.com/images/sites/corescene.png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DynamicMetaTags />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
