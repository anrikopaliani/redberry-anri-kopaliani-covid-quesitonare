import React from 'react';
import ReactDOM from 'react-dom/client';
import { FormContextProvider } from '@/store/FormContext';

import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FormContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </FormContextProvider>
);
