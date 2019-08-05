import React from 'react';

import style from './Footer.module.scss';

const Footer = () => (
  <footer className={style.footer}>
    <a href="/" className={style.link}>@ Copyright</a>
    <a href="/" className={style.link}>All rights reserved</a>
    <a href="/" className={style.link}>Imprint</a>
    <a href="/" className={style.link}>Terms of Use</a>
    <a href="/" className={style.link}>Privacy Policy</a>
  </footer>
);

export default Footer;
