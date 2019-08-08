import React from 'react';
import PropTypes from 'prop-types';

import Filters from '../Filters/Filters';

import style from './Sidebar.module.scss';

const Sidebar = ({ documents }) => (
  <aside className={style.sidebar}>
    <Filters documents={documents} />
  </aside>
);

Sidebar.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidebar;
