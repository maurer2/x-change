import React from 'react';
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

const Results = ({ resultsList }) => {
  const TableHeadRow = () => (
    <tr className={style.tableHeadRow}>
      <td>Document Name</td>
      <td>Date</td>
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
        {resultsList.map((entry, index) => (
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
