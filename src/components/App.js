import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import style from './App.module.scss';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const filterDocuments = (documents = [], allowedTypes = []) => {
  if (documents.length === 0 || allowedTypes.length === 0) {
    return [];
  }

  const filteredDocuments = documents.filter((documentEntry) => {
    const documentName = documentEntry.name;
    const fileEnding = documentName.split('.').pop();
    const isAllowedType = allowedTypes.includes(fileEnding);

    return isAllowedType;
  });

  return filteredDocuments;
};

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

const getDocuments = () => {
  const documentsRaw = fetchData('/data.json')
    .then((responseData) => {
      if (responseData === undefined) {
        return [];
      }

      const unfilteredDocuments = responseData.documents;
      const filteredDocuments = filterDocuments(unfilteredDocuments, ['pdf', 'docx']);

      return filteredDocuments;
    });

  return documentsRaw;
};

function App() {
  const [documents, setDocuments] = useState({});
  const [user, setUser] = useState({});
  // const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    getDocuments()
      .then((responseData) => {
        if (responseData.length === 0) {
          return;
        }
        setDocuments(responseData);
      });
  }, []);

  useEffect(() => {
    fetchData('/user.json')
      .then((responseData) => {
        if (responseData === undefined) {
          return;
        }

        setUser(responseData.body.User.profile);
      });
  }, []);

  return (
    <div className={style.app}>
      <Header user={user} />
      <div className={style.wrapper}>
        <Sidebar />
        <Main documents={documents} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
