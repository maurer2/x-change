import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import style from './Pagination.module.scss';

const Pagination = ({ listTotal, listStartPosition, itemsPerPage, handleListPositionChange }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    const newCurrentPage = listStartPosition / itemsPerPage;
    const newMaxPage = listTotal / itemsPerPage;

    setCurrentPage(Math.ceil(newCurrentPage + 1));
    setMaxPage(Math.ceil(newMaxPage));
  }, [listTotal, listStartPosition, itemsPerPage]);

  const handleButtonClick = () => {
    const newListStartPosition = listStartPosition + itemsPerPage;

    handleListPositionChange(newListStartPosition);
  };

  return (
    <nav className={style.pagination}>
      <button className={style.button} onClick={handleButtonClick} type="button">
        &lt;&lt;
      </button>
      <button className={style.button} onClick={handleButtonClick} type="button">
        &lt;
      </button>
      <div className={style.text}>
        <span>{currentPage}</span>
        of
        <span>{maxPage}</span>
      </div>
      <button className={style.button} onClick={handleButtonClick} type="button">
        &gt;&gt;
      </button>
      <button className={style.button} onClick={handleButtonClick} type="button">
        &gt;
      </button>
    </nav>
  );
};

Pagination.propTypes = {
  listTotal: PropTypes.number.isRequired,
  listStartPosition: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  handleListPositionChange: PropTypes.func.isRequired,
};

export default Pagination;
