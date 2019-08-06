import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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

function App({ user, documents }) {
  const [transformedDocuments, setTransformedDocuments] = useState(documents);

  useEffect(() => {
    const filteredDocuments = filterDocuments(documents, ['pdf', 'docx']);

    setTransformedDocuments(filteredDocuments);
  }, [documents]);

  return (
    <div className={style.app}>
      <Header user={user} />
      <h1 className={style.pageTitle}>Documents</h1>
      <main className={style.wrapper}>
        <Sidebar />
        <Main documents={transformedDocuments} />
      </main>
      <Footer />
    </div>
  );
}

App.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  documents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
