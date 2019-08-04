import React from 'react';
// import PropTypes from 'prop-types';

import style from './Footer.module.scss';

const Footer = () => (
  <footer className={style.footer}>
    <a href="/" className="link">@ Copyright</a>
    <a href="/" className="link">All rights reserved</a>
    <a href="/" className="link">Imprint</a>
    <a href="/" className="link">Terms of Use</a>
    <a href="/" className="link">Privacy Policy</a>
  </footer>
);

/*
Filters.propTypes = {
};
*/

export default Footer;
