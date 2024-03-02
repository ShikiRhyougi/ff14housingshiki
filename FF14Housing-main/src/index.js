import React from 'react';
import ReactDOM from 'react-dom';  // Correct import statement
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);