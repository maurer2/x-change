import React from 'react';
// import PropTypes from 'prop-types';

import Filters from '../Filters/Filters';

import style from './Sidebar.module.scss';

const Sidebar = () => (
  <aside className={style.sidebar}>
    <Filters />
  </aside>
);

/*
Sidebar.propTypes = {
};
*/

export default Sidebar;
