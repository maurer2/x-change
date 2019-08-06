import React, { useState } from 'react';
import PropTypes from 'prop-types';

import style from './Results.module.scss';

function getSimpleDate(dateString) {
  const newDate = new Date(dateString);

  const day = (newDate.getDay()).toString().padStart(2, '0');
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const year = (newDate.getFullYear()).toString().padStart(4, '0');

  const newDateString = `${day}-${month}-${year}`;

  return newDateString;
}

const sortResultsByDate = (results) => {
  const resultsSorted = results.slice(0);

  resultsSorted.sort((entryA, entryB) => {
    if (entryA.date < entryB.date) {
      return -1;
    }

    if (entryA.date > entryB.date) {
      return 1;
    }

    return 0;
  });

  return resultsSorted;
};

const sortResultsByName = (results) => {
  const resultsSorted = results.slice(0);

  resultsSorted.sort((entryA, entryB) => entryA.name.localeCompare(entryB.name));

  return resultsSorted;
};

const Results = ({ resultsList }) => {
  const [sortByDate, setSortByDate] = useState(true);

  const resultsSortedByDate = sortResultsByDate(resultsList);
  const resultsSortedByName = sortResultsByName(resultsList);

  const toggleSortByName = () => {
    setSortByDate(false);
  };

  const toggleSortByDate = () => {
    setSortByDate(true);
  };

  const TableHeadRow = () => (
    <tr className={style.tableHeadRow}>
      <td>
        <button
          className={`${style.button} ${sortByDate ? '' : style['button--is-active']}`}
          type="button"
          onClick={() => toggleSortByName()}
        >
          Document Name
        </button>
      </td>
      <td>
        <button
          className={`${style.button} ${sortByDate ? style['button--is-active'] : ''}`}
          type="button"
          onClick={() => toggleSortByDate()}
        >
          Date
        </button>
      </td>
    </tr>
  );

  const TableBodyRow = ({ entry, index }) => (
    <tr className={style.tableBodyRow} key={`tr-body-row-${index}`}>
      <td key={`td-${index}-name`}>{entry.name}</td>
      <td key={`td-${index}-date`}>
        {getSimpleDate(entry.date)}
      </td>
    </tr>
  );

  return (
    <table className={style.table}>
      <thead>
        <TableHeadRow />
      </thead>
      <tbody>
        {sortByDate && resultsSortedByDate.map((entry, index) => (
          <TableBodyRow entry={entry} index={index} key={`tr-${index}`} />
        ))}
        {!sortByDate && resultsSortedByName.map((entry, index) => (
          <TableBodyRow entry={entry} index={index} key={`tr-${index}`} />
        ))}
      </tbody>
    </table>
  );
};

Results.propTypes = {
  resultsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Results;
