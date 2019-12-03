import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import CharacterBase from '../components/Character/Base';
import CharacterList from '../components/Character/List';

import styles from '../styles/common';
/**
 * Component for Character Router
 *
 * @component
 *
 */
const Character = ({match}) => (
  <div>
    <nav className={styles.navigator}>
      <Link className={styles.link} to={`${match.path}/base`}>Base</Link>
      <Link className={styles.link} to={`${match.path}/list`}>List</Link>
    </nav>
    <div>
      <Switch>
        <Route path={`${match.path}/base`}>
          <CharacterBase />
        </Route>
        <Route path={`${match.path}/list`}>
          <CharacterList />
        </Route>
        <Redirect from={`${match.path}`} to={`${match.path}/base`} />
      </Switch>
    </div>
  </div>
);

Character.propTypes = {
  /**
   * from react-router
   */
  match: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired
}

export default Character;
