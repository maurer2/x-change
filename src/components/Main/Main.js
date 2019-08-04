import React from 'react';
// import PropTypes from 'prop-types';

import style from './Main.module.scss';

const Main = ({ data }) => {
  return (
    <main className={style.main}>
      <pre>
        { JSON.stringify(data, null, 2) }
      </pre>
    </main>
  );
};

/*
Main.propTypes = {
  data: PropTypes.object.isRequired,
};
*/

export default Main;
