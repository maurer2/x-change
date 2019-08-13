import React from 'react';
import PropTypes from 'prop-types';

import Filters from '../Filters/Filters';

import style from './Sidebar.module.scss';

const Sidebar = ({ documents, handleFilterUpdate }) => (
  <aside className={style.sidebar}>
    <Filters
      documents={documents}
      handleFilterUpdate={handleFilterUpdate}
    />
  </aside>
);

Sidebar.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleFilterUpdate: PropTypes.func.isRequired,
};

export default Sidebar;
