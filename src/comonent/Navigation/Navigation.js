import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../service/routes.js';
import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={style.navbar}>
        <li className={style.navbarItem}>
          <NavLink to={routes.home}>Home Page</NavLink>
        </li>
        <li className={style.navbarItem}>
          <NavLink to={routes.movies}>Movies Page </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
