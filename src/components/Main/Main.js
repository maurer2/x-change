import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import style from './Main.module.scss';
import Results from '../Results/Results';
import Pagination from '../Pagination/Pagination';

const getListSection = (list, startPosition, sectionLength) => {
  const listSection = list.filter((_, index) => {
    const isAfterStartPostion = index >= startPosition;
    const isBeforeEndPosition = index < (startPosition + sectionLength);

    return isAfterStartPostion && isBeforeEndPosition;
  });

  return listSection;
};

const Main = ({ documents, handleSortChange, sortByDate, sortInDescendingOrder }) => {
  const [resultsList, setResultsList] = useState([]);
  const [listStartPosition, setListStartPosition] = useState(0);

  const itemsPerPage = 5;

  useEffect(() => {
    const listSection = getListSection(documents, listStartPosition, itemsPerPage);

    setResultsList(listSection);
  }, [documents, listStartPosition]);

  const handleListPositionChange = (newListStartPosition) => {
    setListStartPosition(newListStartPosition);
  };

  return (
    <div className={style.main}>
      <Results
        resultsList={resultsList}
        handleSortChange={handleSortChange}
        sortByDate={sortByDate}
        sortInDescendingOrder={sortInDescendingOrder}
      />
      <Pagination
        listTotal={documents.length}
        listStartPosition={listStartPosition}
        itemsPerPage={itemsPerPage}
        handleListPositionChange={handleListPositionChange}
      />
    </div>
  );
};

Main.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSortChange: PropTypes.func.isRequired,
  sortByDate: PropTypes.bool.isRequired,
  sortInDescendingOrder: PropTypes.bool.isRequired,
};

export default Main;
