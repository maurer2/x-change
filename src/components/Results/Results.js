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

const TableHeadButton = ({ sortByTarget, isActive, isInverted, handleOnClick, children }) => (
  <button
    className={`
      ${style.tableHeadButton}
      ${isActive ? style['tableHeadButton--isActive'] : ''}
      ${isInverted ? style['tableHeadButton--isInverted'] : ''}
    `}
    type="button"
    onClick={() => handleOnClick(sortByTarget)}
  >
    {children}
  </button>
);

const Results = ({ resultsList, handleSortChange, sortByDate, sortInDescendingOrder }) => {
  const TableHeadRow = () => {
    const handleOnClick = (sortByTarget) => {
      handleSortChange(sortByTarget);
    };

    return (
      <tr className={style.tableHeadRow}>
        <td>
          <TableHeadButton
            sortByTarget="name"
            isActive={!sortByDate}
            isInverted={sortInDescendingOrder}
            handleOnClick={handleOnClick}
          >
            Document Name
          </TableHeadButton>
        </td>
        <td>
          <TableHeadButton
            sortByTarget="date"
            isActive={sortByDate}
            isInverted={sortInDescendingOrder}
            handleOnClick={handleOnClick}
          >
            Date
          </TableHeadButton>
        </td>
      </tr>
    );
  };

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
  handleSortChange: PropTypes.func.isRequired,
  sortByDate: PropTypes.bool.isRequired,
  sortInDescendingOrder: PropTypes.bool.isRequired,
};

TableHeadButton.propTypes = {
  sortByTarget: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isInverted: PropTypes.bool.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Results;
