import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import style from './Filters.module.scss';

const Filters = ({ documents }) => {
  const [documentDates, setDocumentDates] = useState([]);
  const [filtersEnabled, setFiltersEnabled] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const extractedDates = documents.map(documentEntry => documentEntry.dateShort);
    const uniqueDates = extractedDates
      .filter((documentEntry, index, currentArray) => currentArray
        .indexOf(documentEntry) === index);

    setDocumentDates(uniqueDates);
  }, [documents]);

  useEffect(() => {
    if (startDate !== '' && endDate !== '') {
      setFiltersEnabled(true);
    } else {
      setFiltersEnabled(false);
    }
  }, [startDate, endDate, filtersEnabled]);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('submit');
  };

  const handleFormReset = () => {
    setStartDate('');
    setEndDate('');
  };

  return (
    <form className={style.filters} onSubmit={handleSubmit} action="" method="post">
      <fieldset className={style.fieldset}>
        <legend className={style.legend}>
          Filter by
        </legend>
        <select
          className={style.selectBox}
          value={startDate}
          onChange={event => handleStartDateChange(event)}
        >
          <option value="" disabled>From</option>
          {documentDates.map(documentDate => (
            <option key={documentDate} value={documentDate}>{documentDate}</option>
          ))}
        </select>
        <select
          className={style.selectBox}
          value={endDate}
          onChange={event => handleEndDateChange(event)}
        >
          <option value="" disabled>To</option>
          {documentDates.map(documentDate => (
            <option key={documentDate} value={documentDate}>{documentDate}</option>
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
      <button className={style.resetButton} type="button" onClick={() => handleFormReset()}>
        Clear Filters
      </button>
    </form>
  );
};

Filters.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Filters;
