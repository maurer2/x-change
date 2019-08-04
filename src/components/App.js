import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import style from './App.module.scss';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const fetchData = (url) => {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        let jsonResponse;

        try {
          jsonResponse = response.json();
        } catch (e) {
          return new Error(e);
        }

        return jsonResponse;
      }

      return new Error();
    })
    .catch((error) => {
      console.log(error);
    });
};

function App() {
  const [data, setData] = useState({});
  // const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    fetchData('/data.json')
      .then((responseData) => {
        if (responseData === undefined) {
          return;
        }

        const { documents } = responseData;
        setData(documents);
      });
  }, []);

  return (
    <div className={style.app}>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <Main data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
