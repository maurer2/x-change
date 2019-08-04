import React from 'react';
// import logo from './logo.svg';
import style from './App.module.scss';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
