import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Equipment from './pages/Equipment';
import Character from './pages/Character';

import styles from './styles/common';


export default () => (
  <Router>
    <div>
      <nav className={styles.navigator}>
        <Link className={styles.link} to="/char">Character</Link>
        <Link className={styles.link} to="/equip/">Equipment</Link>
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
