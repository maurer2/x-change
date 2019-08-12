import React from 'react';
import PropTypes from 'prop-types';

import Filters from '../Filters/Filters';

import style from './Sidebar.module.scss';

const Sidebar = ({ documents, handleStartDateChange, handleEndDateChange, startDate, endDate }) => (
  <aside className={style.sidebar}>
    <Filters
      documents={documents}
      handleStartDateChange={handleStartDateChange}
      handleEndDateChange={handleEndDateChange}
      startDate={startDate}
      endDate={endDate}
    />
  </aside>
);

Sidebar.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleStartDateChange: PropTypes.func.isRequired,
  handleEndDateChange: PropTypes.func.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default Sidebar;
