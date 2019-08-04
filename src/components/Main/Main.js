import React from 'react';
// import PropTypes from 'prop-types';

import style from './Main.module.scss';

const Main = () => {
  const name = 'Main';

  return (
    <main className={style.main}>
      {name}
    </main>
  );
};

/*
Main.propTypes = {
};
*/

export default Main;
