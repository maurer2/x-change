import React from 'react';
// import PropTypes from 'prop-types';

import style from './Main.module.scss';

const Main = ({ documents }) => {
  return (
    <main className={style.main}>
      <pre>
        { JSON.stringify(documents, null, 2) }
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
