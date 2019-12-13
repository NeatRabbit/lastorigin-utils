import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Equipment from './pages/Equipment';
import Character from './pages/Character';
import Navigator from './components/common/Navigator';

import 'normalize.css';
import {wrap} from './styles/common';

export default () => (
  <Router>
    <div className={wrap}>
      <Navigator />
      <div>
        <Switch>
          <Route path="/char">
            <Character />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
);
