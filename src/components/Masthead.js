import React from 'react';
// import PropTypes from 'prop-types';

import NavPrimary from './Nav-Primary';
import UserCard from './User-Card';

import style from './Masthead.module.scss';

import { ReactComponent as Logo } from '../assets/logo.svg';

const Masthead = () => {
  return (
    <header className={style.masthead}>
      <Logo className={style.logo} />
      <NavPrimary className={style.usercard} />
      <UserCard className={style.navigation} />
    </header>
  );
};

// Masthead.propTypes = {
// };

export default Masthead;
