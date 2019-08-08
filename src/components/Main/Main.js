import React from 'react';
import PropTypes from 'prop-types';

import style from './Main.module.scss';
import Results from '../Results/Results';
import Pagination from '../Pagination/Pagination';

const Main = ({ documents, handleSortChange, sortByDate }) => {
  const resultsList = documents;

  return (
    <div className={style.main}>
      <Results
        resultsList={resultsList}
        handleSortChange={handleSortChange}
        sortByDate={sortByDate}
      />
      <Pagination />
    </div>
  );
};

Main.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSortChange: PropTypes.func.isRequired,
  sortByDate: PropTypes.bool.isRequired,
};

export default Main;
