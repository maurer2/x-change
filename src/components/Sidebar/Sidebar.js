import React from 'react';
import PropTypes from 'prop-types';

import Filters from '../Filters/Filters';

import style from './Sidebar.module.scss';

const Sidebar = ({ documents, handleStartDateChange, handleEndDateChange, startDate, endDate, handleFilterSubmit }) => (
  <aside className={style.sidebar}>
    <Filters
      documents={documents}
      handleStartDateChange={handleStartDateChange}
      handleEndDateChange={handleEndDateChange}
      startDate={startDate}
      endDate={endDate}
      handleFilterSubmit={handleFilterSubmit}
    />
  </aside>
);

Sidebar.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleStartDateChange: PropTypes.func.isRequired,
  handleEndDateChange: PropTypes.func.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  handleFilterSubmit: PropTypes.func.isRequired,
};

export default Sidebar;
