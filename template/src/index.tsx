import PrivateRoutes from '@/routes';
import '@/styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PrivateRoutes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
