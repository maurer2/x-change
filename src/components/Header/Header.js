import React from 'react';
// import PropTypes from 'prop-types';

import NavPrimary from '../Nav-Primary/Nav-Primary';
import UserCard from '../User-Card/User-Card';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import style from './Header.module.scss';

const Header = ({ user }) => {
  return (
    <header className={style.header}>
      <Logo className={style.logo} />
      <NavPrimary className={style.usercard} />
      <UserCard className={style.navigation} user={user} />
    </header>
  );
};

// Masthead.propTypes = {
// };

export default Header;
