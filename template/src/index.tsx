import routes from '@routes/index';
import '@styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router, Switch } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
