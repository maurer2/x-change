import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import style from './Filters.module.scss';

const Filters = ({ documents }) => {
  const [documentDates, setDocumentDates] = useState([]);
  useEffect(() => {
    const extractedDates = documents.map(documentEntry => documentEntry.dateShort);
    const uniqueDates = extractedDates
      .filter((documentEntry, index, currentArray) => currentArray
        .indexOf(documentEntry) === index);

    setDocumentDates(uniqueDates);
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
