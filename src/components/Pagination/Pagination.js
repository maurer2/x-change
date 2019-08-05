import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ itemsPerPage }) => {
  const name = 'Pagination';

  return (
    <div>
      {name}
    </div>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
