import React from 'react';
import {NavLink} from 'react-router-dom';

import {wrap, inner, link, isActive, title} from '../../styles/navigator';

export default () => (
  <nav className={wrap}>
    <div className={inner}>
      <strong className={title}>LastOrigin Utils</strong>
      <NavLink className={link} activeClassName={isActive} to="/char">Character</NavLink>
      <NavLink className={link} activeClassName={isActive} to="/equip">Equipment</NavLink>
    </div>
  </nav>
)
