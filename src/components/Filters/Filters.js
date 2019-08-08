import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import style from './Filters.module.scss';

function getSimpleDate(dateString) {
  const newDate = new Date(dateString);

  const day = (newDate.getDay()).toString().padStart(2, '0');
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const year = (newDate.getFullYear()).toString().padStart(4, '0');

  const newDateString = `${day}-${month}-${year}`;

  return newDateString;
}

const Filters = ({ documents }) => {
  const [documentDates, setDocumentDates] = useState([]);
  useEffect(() => {
    const extractedDates = documents.map(documentEntry => documentEntry.date);
    const simplifiedDates = extractedDates
      .map(documentEntry => getSimpleDate(documentEntry))
      .filter((documentEntry, index, currentArray) => currentArray
        .indexOf(documentEntry) === index);

    setDocumentDates(simplifiedDates);
  }, [documents]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('submit');
  };

  return (
    <form className={style.filters} onSubmit={handleSubmit} action="/" method="post">
      <fieldset className={style.fieldset}>
        <legend className={style.legend}>
          Filter by
        </legend>
        <select className={style.selectBox} defaultValue={-1}>
          <option value="-1" default disabled>From</option>
          {documentDates.map(documentDate => (
            <option key={documentDate}>{documentDate}</option>
          ))}
        </select>
        <select className={style.selectBox} defaultValue={-1}>
          <option value="-1" default disabled>To</option>
          {documentDates.map(documentDate => (
            <option key={documentDate}>{documentDate}</option>
          ))}
        </select>
      </fieldset>
      <button className={style.submitButton} type="submit">
        Apply filters
      </button>
      <button className={style.resetButton} type="button">
        Clear Filters
      </button>
    </form>
  );
};

Filters.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Filters;
