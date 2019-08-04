import React from 'react';
import PropTypes from 'prop-types';

import style from './Nav-Primary.module.scss';

const NavPrimary = ({ className }) => {
  return (
    <nav className={`${className} ${style.navigation}`}>
      <a href="/" className={style.link}>Home</a>
      <a href="/" className={style.link}>Documents</a>
      <a href="/" className={style.link}>Contacts</a>
    </nav>
  );
};

NavPrimary.propTypes = {
  className: PropTypes.string.isRequired,
};

export default NavPrimary;
