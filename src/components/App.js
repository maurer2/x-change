import React, { useState, useEffect } from 'react';
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

const mapDocuments = (documents) => {
  const mappedDocuments = documents.map((documentEntry) => {
    const { name, date } = documentEntry;

    return {
      name,
      date,
    };
  });

  return mappedDocuments;
};

const fetchData = (url) => {
  const data = fetch(url)
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

  return data;
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
  const [documents, setDocuments] = useState([]);
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
      <h1 className={style.pageTitle}>Documents</h1>
      <main className={style.wrapper}>
        <Sidebar />
        <Main documents={documents} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
