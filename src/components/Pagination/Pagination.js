import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import style from './Pagination.module.scss';

const Pagination = ({ documents }) => {
  const [maxPage, setMaxPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    const numberOfDocuments = documents.length / itemsPerPage;

    setMaxPage(Math.ceil(numberOfDocuments));
  }, [documents]);

  const handleButtonClick = () => {
    setCurrentPage(currentPage + 1);
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
  documents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Pagination;
