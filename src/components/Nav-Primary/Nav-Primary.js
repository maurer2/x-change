import React from 'react';

import style from './Nav-Primary.module.scss';

const NavPrimary = () => {
  return (
    <nav className={style.navigation}>
      <a href="/" className={style.link}>Home</a>
      <a href="/" className={`${style.link} ${style['link--is-active']}`}>Documents</a>
      <a href="/" className={style.link}>Contacts</a>
    </nav>
  );
};

export default NavPrimary;
