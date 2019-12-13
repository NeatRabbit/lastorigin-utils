import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
import Equipment from './pages/Equipment';
import Character from './pages/Character';

import * as commonStyle from '../client/styles/common';
import * as navigatorStyle from '../client/styles/navigator';

export default () => (
  <Router>
    <div className={commonStyle.wrap}>
      <nav className={navigatorStyle.wrap}>
        <div className={navigatorStyle.inner}>
          <NavLink className={navigatorStyle.link} activeClassName={navigatorStyle.isActive} to="/char">Character</NavLink>
          <NavLink className={navigatorStyle.link} activeClassName={navigatorStyle.isActive} to="/equip">Equipment</NavLink>
        </div>
      </nav>
      <div>
        <Switch>
          <Route path="/equip" component={Equipment} />
          <Route path="/char" component={Character} />
          <Redirect from="/" to="/char" />
        </Switch>
      </div>
    </div>
  </Router>
);
