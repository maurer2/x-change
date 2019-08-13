import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import style from './Filters.module.scss';

const sortByDate = (results) => {
  const resultsSorted = results.slice(0).sort((entryA, entryB) => {
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

const getDocumentsWithUniqueShortDates = (documents) => {
  const documentsWithUniqueDates = documents.reduce((total, current) => {
    const hasAlreadyEntryWithCurrentDate = total
      .some(documentEntry => documentEntry.dateShort === current.dateShort);

    if (hasAlreadyEntryWithCurrentDate) {
      return total;
    }

    return total.concat([current]);
  }, []);

  return documentsWithUniqueDates;
};

const Filters = ({ documents, handleFilterUpdate }) => {
  const [documentDates, setDocumentDates] = useState([]);
  const [filtersEnabled, setFiltersEnabled] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const sortedDocuments = sortByDate(documents, startDate, endDate);
    const uniqueDocumentDates = getDocumentsWithUniqueShortDates(sortedDocuments);

    setDocumentDates(uniqueDocumentDates);
  }, [documents, startDate, endDate]);

  useEffect(() => {
    if (startDate !== '' && endDate !== '') {
      setFiltersEnabled(true);

      return;
    }

    setFiltersEnabled(false);
  }, [startDate, endDate, filtersEnabled]);

  const handleSubmit = (event) => {
    event.preventDefault();

    handleFilterUpdate(startDate, endDate);
  };

  const handleReset = () => {
    setStartDate('');
    setEndDate('');

    handleFilterUpdate('', '');
  };

  const handleStartDateChange = value => setStartDate(value);
  const handleEndDateChange = value => setEndDate(value);

  return (
    <form className={style.filters} onSubmit={handleSubmit} action="" method="post">
      <fieldset className={style.fieldset}>
        <legend className={style.legend}>
          Filter by
        </legend>
        <select
          className={style.selectBox}
          value={startDate}
          onChange={event => handleStartDateChange(event.target.value)}
        >
          <option value="" disabled>From</option>
          {documentDates.map(documentDate => (
            <option key={documentDate.dateShort} value={documentDate.date}>
              {documentDate.dateShort}
            </option>
          ))}
        </select>
        <select
          className={style.selectBox}
          value={endDate}
          onChange={event => handleEndDateChange(event.target.value)}
        >
          <option value="" disabled>To</option>
          {documentDates.map(documentDate => (
            <option key={documentDate.dateShort} value={documentDate.date}>
              {documentDate.dateShort}
            </option>
          ))}
        </select>
      </fieldset>
      <button
        className={`${style.submitButton} ${filtersEnabled ? '' : style['submitButton--is-disabled']}`}
        disabled={!filtersEnabled}
        type="submit"
      >
        Apply filters
      </button>
      <button className={style.resetButton} onClick={() => handleReset()} type="button">
        Clear Filters
      </button>
    </form>
  );
};

Filters.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleFilterUpdate: PropTypes.func.isRequired,
};

export default Filters;
