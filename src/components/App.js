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

const sortResultsByDate = (results) => {
  const resultsSorted = results.slice(0).sort((entryA, entryB) => {
    if (entryA.date < entryB.date) {
      return -1;
    }

    if (entryA.date > entryB.date) {
      return 1;
    }

    return 0;
  });

  return resultsSorted;
};

const sortResultsByName = (results) => {
  const resultsSorted = results.slice(0)
    .sort((entryA, entryB) => entryA.name.localeCompare(entryB.name));

  return resultsSorted;
};

const changeSortOrder = (results) => {
  const reversedResults = results.slice(0).reverse();

  return reversedResults;
};

function App({ user, documents }) {
  const [transformedDocuments, setTransformedDocuments] = useState(documents);
  const [sortByDate, setSortByDate] = useState(true);
  const [sortInDescendingOrder, setSortInDescendingOrder] = useState(true);

  useEffect(() => {
    const filteredDocuments = filterDocuments(documents, ['pdf', 'docx']);
    const sortedByKeyDocuments = sortByDate
      ? sortResultsByDate(filteredDocuments)
      : sortResultsByName(filteredDocuments);

    setTransformedDocuments(sortedByKeyDocuments);
  }, [documents, sortByDate]);

  useEffect(() => {
    const sortedByDirection = changeSortOrder(transformedDocuments);

    setTransformedDocuments(sortedByDirection);
  }, [sortInDescendingOrder]);

  const handleSortChange = (sortByKey) => {
    const newSortByDateValue = (sortByKey === 'date');

    if (newSortByDateValue === sortByDate) {
      setSortInDescendingOrder(!sortInDescendingOrder);
    }

    setSortByDate(newSortByDateValue);
  };

  return (
    <div className={style.app}>
      <Header user={user} />
      <h1 className={style.pageTitle}>
        Documents
      </h1>
      <main className={style.wrapper}>
        <Sidebar documents={transformedDocuments} />
        <Main
          documents={transformedDocuments}
          handleSortChange={handleSortChange}
          sortByDate={sortByDate}
          sortInDescendingOrder={sortInDescendingOrder}
        />
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
