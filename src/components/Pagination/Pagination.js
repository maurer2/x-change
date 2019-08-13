import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import style from './Pagination.module.scss';

const Pagination = ({ listTotal, listStartPosition, itemsPerPage, handleListPositionChange }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    const newCurrentPage = listStartPosition / itemsPerPage;
    const newMaxPage = listTotal / itemsPerPage;

    if (newCurrentPage === 0) {
      setIsFirstPage(true);
    } else {
      setIsFirstPage(false);
    }

    if (newCurrentPage === maxPage - 1) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }

    setCurrentPage(Math.ceil(newCurrentPage + 1));
    setMaxPage(Math.ceil(newMaxPage));
  }, [listTotal, listStartPosition, itemsPerPage, maxPage]);

  const handleNextButtonClick = () => {
    const newListStartPosition = listStartPosition + itemsPerPage;

    handleListPositionChange(newListStartPosition);
  };

  const handlePrevButtonClick = () => {
    const newListStartPosition = Math.max(listStartPosition - itemsPerPage, 0);

    handleListPositionChange(newListStartPosition);
  };

  return (
    <nav className={style.pagination}>
      <button className={style.button} onClick={handlePrevButtonClick} disabled={isFirstPage} type="button">
        &lt;&lt;
      </button>
      <button className={style.button} onClick={handlePrevButtonClick} disabled={isFirstPage} type="button">
        &lt;
      </button>
      <div className={style.text}>
        <span>{currentPage}</span>
        <span> of </span>
        <span>{maxPage}</span>
      </div>
      <button className={style.button} onClick={handleNextButtonClick} disabled={isLastPage} type="button">
        &gt;&gt;
      </button>
      <button className={style.button} onClick={handleNextButtonClick} disabled={isLastPage} type="button">
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
