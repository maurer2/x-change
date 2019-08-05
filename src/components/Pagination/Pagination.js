import React from 'react';
import PropTypes from 'prop-types';

import style from './Pagination.module.scss';

const Pagination = ({ itemsPerPage }) => {
  const name = 'Pagination';

  return (
    <div className={style.pagination}>
      {name}
    </div>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
