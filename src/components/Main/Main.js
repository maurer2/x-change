import React from 'react';
import PropTypes from 'prop-types';

import style from './Main.module.scss';
import Results from '../Results/Results';
import Pagination from '../Pagination/Pagination';

const Main = ({ documents }) => {
  const resultsList = documents;

  return (
    <div className={style.main}>
      <Results resultsList={resultsList} />
      <Pagination />
    </div>
  );
};

Main.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
