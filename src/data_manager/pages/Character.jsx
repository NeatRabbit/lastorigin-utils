import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import CharacterBase from '../components/Character/Base';
import CharacterList from '../components/Character/List';

import * as navigatorStyle from '../../client/styles/navigator';
/**
 * Component for Character Router
 *
 * @component
 *
 */
const Character = ({match}) => (
  <div>
    <nav className={navigatorStyle.wrap}>
      <div className={navigatorStyle.inner}>
        <NavLink className={navigatorStyle.link} activeClassName={navigatorStyle.isActive} to={`${match.path}/base`}>Base</NavLink>
        <NavLink className={navigatorStyle.link} activeClassName={navigatorStyle.isActive} to={`${match.path}/list`}>List</NavLink>
      </div>
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
