import React from 'react';
import PropTypes from 'prop-types';

import style from './Filters.module.scss';

const Filters = () => {
  const name = 'Filters';

  return (
    <form className={style.filters} action="/" method="post">
      <fieldset className={style.fieldset}>
        <legend className={style.legend}>
          Filter by
        </legend>
        <select className={style.selectBox}>
          <option value="-1" selected default disabled>From</option>
        </select>
        <select className={style.selectBox}>
          <option value="-1" selected default disabled>To</option>
        </select>
      </fieldset>
      <button className={style.submitButton} type="submit">
        Apply filters
      </button>
      <button className={style.resetButton} type="reset">
        Clear Filters
      </button>
    </form>
  );
};

Filters.propTypes = {
};

export default Filters;
