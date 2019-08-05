import React from 'react';
import PropTypes from 'prop-types';

import style from './Results.module.scss';

const Results = ({ resultsList }) => {
  const TableHeadRow = () => (
    <tr className={style.tableHeadRow}>
      <td>Document Name</td>
      <td>Date</td>
    </tr>
  );

  const TableBodyRow = ({ entry, index }) => (
    <tr className={style.tableBodyRow} key={`tr-${index}`}>
      <td key={`td-${index}-name`}>{entry.name}</td>
      <td key={`td-${index}-date`}>{entry.date}</td>
    </tr>
  );

  return (
    <table className={style.table}>
      <thead>
        <TableHeadRow />
      </thead>
      <tbody>
        {resultsList.map((entry, index) => (
          <TableBodyRow key={`tr-body-${index}`} entry={entry} index={index} />
        ))}
      </tbody>
    </table>
  );
};

Results.propTypes = {
  resultsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Results;
